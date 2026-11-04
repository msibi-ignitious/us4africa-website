
import { Router } from 'express';
import { z } from 'zod';

import { prisma } from '../db.js';
import { requireAdmin } from '../middleware/auth.js';
import { sendDonationAcknowledgement } from '../services/email.js';

const router = Router();

// All donation-management endpoints require administrator authentication.
router.use(requireAdmin);

const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20)
});


// GET /api/donations
// List all donations with donor information and pagination.
router.get('/', async (req, res) => {
  const parsed = paginationSchema.safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid pagination parameters.'
    });
  }

  const { page, limit } = parsed.data;

  try {
    const [donations, total] = await prisma.$transaction([
      prisma.donation.findMany({
        orderBy: [
          { donationDate: 'desc' },
          { createdAt: 'desc' }
        ],
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          amount: true,
          currency: true,
          status: true,
          recurring: true,
          recurringInterval: true,
          designation: true,
          donationDate: true,
          amountRefunded: true,
          acknowledgementStatus: true,
          acknowledgementSentAt: true,
          acknowledgementError: true,
          createdAt: true,
          donor: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
              country: true
            }
          }
        }
      }),
      prisma.donation.count()
    ]);

    return res.json({
      donations,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Donation listing error:', error);

    return res.status(500).json({
      error: 'Unable to retrieve donations.'
    });
  }
});


// GET /api/donations/failed-acknowledgements
// List paid donations whose thank-you emails failed.
router.get('/failed-acknowledgements', async (req, res) => {
  const parsed = paginationSchema.safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid pagination parameters.'
    });
  }

  const { page, limit } = parsed.data;

  try {
    const where = {
      status: 'PAID',
      acknowledgementStatus: 'FAILED'
    };

    const [donations, total] = await prisma.$transaction([
      prisma.donation.findMany({
        where,
        orderBy: [
          { donationDate: 'desc' },
          { createdAt: 'desc' }
        ],
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          amount: true,
          currency: true,
          donationDate: true,
          acknowledgementStatus: true,
          acknowledgementError: true,
          donor: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      }),
      prisma.donation.count({ where })
    ]);

    return res.json({
      donations,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Failed acknowledgement listing error:', error);

    return res.status(500).json({
      error: 'Unable to retrieve failed acknowledgements.'
    });
  }
});

// POST /api/donations/:id/retry-acknowledgement
// Retry a failed thank-you email for a paid donation.
router.post('/:id/retry-acknowledgement', async (req, res) => {
  const parsedId = z.string().min(1).max(100).safeParse(req.params.id);

  if (!parsedId.success) {
    return res.status(400).json({
      error: 'Invalid donation ID.'
    });
  }

  try {
    const donation = await prisma.donation.findUnique({
      where: { id: parsedId.data },
      include: {
        donor: true
      }
    });

    if (!donation) {
      return res.status(404).json({
        error: 'Donation not found.'
      });
    }

    if (donation.status !== 'PAID') {
      return res.status(409).json({
        error: 'Only paid donations can receive an acknowledgement.'
      });
    }

    // Claim the retry only if the email is currently marked FAILED.
    // This prevents simultaneous retry requests from sending duplicates.
    const claim = await prisma.donation.updateMany({
      where: {
        id: donation.id,
        status: 'PAID',
        acknowledgementStatus: 'FAILED'
      },
      data: {
        acknowledgementStatus: 'PENDING',
        acknowledgementError: null
      }
    });

    if (claim.count === 0) {
      return res.status(409).json({
        error: 'This acknowledgement is not marked as failed. Refresh the donation record and try again if appropriate.'
      });
    }

    try {
      await sendDonationAcknowledgement({
        donor: donation.donor,
        donation
      });

      await prisma.donation.update({
        where: { id: donation.id },
        data: {
          acknowledgementStatus: 'SENT',
          acknowledgementSentAt: new Date(),
          acknowledgementError: null
        }
      });

      return res.json({
        message: 'Thank-you email sent successfully.',
        donationId: donation.id,
        acknowledgementStatus: 'SENT'
      });
    } catch (emailError) {
      console.error('Donation acknowledgement retry failed:', emailError);

      await prisma.donation.update({
        where: { id: donation.id },
        data: {
          acknowledgementStatus: 'FAILED',
          acknowledgementError: String(
            emailError.message || 'Email delivery failed.'
          ).slice(0, 1000)
        }
      });

      return res.status(502).json({
        error: 'The thank-you email could not be sent. The failure has been recorded and can be retried later.',
        donationId: donation.id,
        acknowledgementStatus: 'FAILED'
      });
    }
  } catch (error) {
    console.error('Acknowledgement retry endpoint failed:', error);

    return res.status(500).json({
      error: 'Unable to process the acknowledgement retry.'
    });
  }
});

export default router;