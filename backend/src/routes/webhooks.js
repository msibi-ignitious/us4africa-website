
import { Router } from 'express';
import { Prisma } from '@prisma/client';

import { prisma } from '../db.js';
import {
  normalizeDonationEvent,
  verifyDonorboxSignature
} from '../services/donorbox.js';
import { sendDonationAcknowledgement } from '../services/email.js';

const router = Router();

const statusMap = {
  paid: 'PAID',
  refunded: 'REFUNDED',
  partially_refunded: 'PARTIALLY_REFUNDED',
  failed: 'FAILED',
  disputed: 'DISPUTED',
  pending: 'PENDING'
};

router.post('/donorbox', async (req, res) => {
  const rawBody = req.body;

  // 1. Verify the original Donorbox request.
  if (
    !Buffer.isBuffer(rawBody) ||
    !verifyDonorboxSignature(
      rawBody,
      req.get('Donorbox-Signature')
    )
  ) {
    return res.status(401).json({
      error: 'Invalid Donorbox signature.'
    });
  }

  // 2. Parse JSON.
  let body;

  try {
    body = JSON.parse(rawBody.toString('utf8'));
  } catch {
    return res.status(400).json({
      error: 'Invalid JSON payload.'
    });
  }

  // 3. Ignore events we do not process.
  if (!['donation.created', 'donation.updated'].includes(body.event_name)) {
    return res.status(200).json({
      received: true,
      ignored: true
    });
  }

  // 4. Normalize and validate donation data.
  let normalized;

  try {
    normalized = normalizeDonationEvent(body);
  } catch (error) {
    return res.status(400).json({
      error: error.message
    });
  }

  const d = normalized.donation;

  const email = String(d.email || '').trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      error: 'Missing or invalid donor email.'
    });
  }

  const status =
    statusMap[String(d.status || '').toLowerCase()] || 'UNKNOWN';

  const amount = Number(d.amount);

  if (!Number.isFinite(amount) || amount < 0) {
    return res.status(400).json({
      error: 'Invalid donation amount.'
    });
  }

  try {
    // 5. Save the webhook event and donation atomically.
    const result = await prisma.$transaction(async (tx) => {
      const existingEvent = await tx.webhookEvent.findUnique({
        where: {
          provider_providerEventId: {
            provider: 'DONORBOX',
            providerEventId: normalized.eventId
          }
        }
      });

      if (existingEvent) {
        return { duplicate: true };
      }

      await tx.webhookEvent.create({
        data: {
          provider: 'DONORBOX',
          providerEventId: normalized.eventId,
          eventName: normalized.eventName,
          payload: body
        }
      });

      const donor = await tx.donor.upsert({
        where: { email },
        create: {
          donorboxDonorId: d.donorboxDonorId,
          firstName: d.firstName,
          lastName: d.lastName,
          email,
          phone: d.phone,
          country: d.country
        },
        update: {
          donorboxDonorId: d.donorboxDonorId || undefined,
          firstName: d.firstName || undefined,
          lastName: d.lastName || undefined,
          phone: d.phone || undefined,
          country: d.country || undefined
        }
      });

      const existingDonation = await tx.donation.findUnique({
        where: {
          donorboxDonationId: d.donorboxDonationId
        }
      });

      const donation = await tx.donation.upsert({
        where: {
          donorboxDonationId: d.donorboxDonationId
        },
        create: {
          donorboxDonationId: d.donorboxDonationId,
          donorboxCampaignId: d.campaignId,
          donorboxCampaignName: d.campaignName,
          donorId: donor.id,
          amount: new Prisma.Decimal(String(d.amount)),
          currency: d.currency,
          status,
          recurring: d.recurring,
          recurringInterval: d.recurringInterval,
          designation: d.designation,
          donationDate: d.donationDate,
          amountRefunded: d.amountRefunded == null
            ? null
            : new Prisma.Decimal(String(d.amountRefunded)),
          acknowledgementStatus: status === 'PAID'
            ? 'PENDING'
            : 'NOT_QUEUED',
          rawPayload: body
        },
        update: {
          status,
          amountRefunded: d.amountRefunded == null
            ? undefined
            : new Prisma.Decimal(String(d.amountRefunded)),
          rawPayload: body
        }
      });

      const shouldSend =
        status === 'PAID' &&
        existingDonation?.acknowledgementStatus !== 'SENT';

      return {
        duplicate: false,
        donor,
        donation,
        shouldSend
      };
    });

    if (result.duplicate) {
      return res.status(200).json({
        received: true,
        duplicate: true
      });
    }

    // 6. Send acknowledgement for a successful payment.
    if (result.shouldSend) {
      try {
        await prisma.donation.update({
          where: { id: result.donation.id },
          data: {
            acknowledgementStatus: 'PENDING',
            acknowledgementError: null
          }
        });

        await sendDonationAcknowledgement(result);

        await prisma.donation.update({
          where: { id: result.donation.id },
          data: {
            acknowledgementStatus: 'SENT',
            acknowledgementSentAt: new Date(),
            acknowledgementError: null
          }
        });
      } catch (error) {
        console.error(
          'Donation acknowledgement failed:',
          error.message
        );

        await prisma.donation.update({
          where: { id: result.donation.id },
          data: {
            acknowledgementStatus: 'FAILED',
            acknowledgementError: String(error.message).slice(0, 1000)
          }
        });
      }
    }

    return res.status(200).json({
      received: true,
      donationRecorded: true
    });

  } catch (error) {
    console.error('Donorbox webhook processing failed:', error);

    return res.status(500).json({
      error: 'Webhook processing failed. Provider may retry.'
    });
  }
});

export default router;
