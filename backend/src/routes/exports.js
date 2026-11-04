
//export.js
import { Router } from 'express';

import { prisma } from '../db.js';
import { requireAdmin } from '../middleware/auth.js';
import { toCsv } from '../utils/csv.js';

const router = Router();

router.use(requireAdmin);

// GET /api/exports/donors.csv
router.get('/donors.csv', async (_req, res) => {
  try {
    const donors = await prisma.donor.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        country: true,
        mailingConsent: true,
        createdAt: true
      }
    });

    const headers = [
      'Donor ID',
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Country',
      'Mailing Consent',
      'Created At'
    ];

    const rows = donors.map(donor => [
      donor.id,
      donor.firstName,
      donor.lastName,
      donor.email,
      donor.phone,
      donor.country,
      donor.mailingConsent ? 'Yes' : 'No',
      donor.createdAt.toISOString()
    ]);

    const csv = toCsv(headers, rows);

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="us4africa-donors.csv"'
    );

    return res.send(csv);
  } catch (error) {
    console.error('Donor CSV export failed:', error);

    return res.status(500).json({
      error: 'Unable to export donor records.'
    });
  }
});

// GET /api/exports/donations.csv
router.get('/donations.csv', async (_req, res) => {
  try {
    const donations = await prisma.donation.findMany({
      orderBy: { donationDate: 'desc' },
      include: {
        donor: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    const headers = [
      'Donation ID',
      'Donor First Name',
      'Donor Last Name',
      'Donor Email',
      'Amount',
      'Currency',
      'Status',
      'Recurring',
      'Recurring Interval',
      'Donation Designation',
      'Designation',
      'Donation Date',
      'Amount Refunded',
      'Acknowledgement Status',
      'Acknowledgement Sent At'
    ];

    const rows = donations.map(donation => [
      donation.id,
      donation.donor.firstName,
      donation.donor.lastName,
      donation.donor.email,
      donation.amount.toString(),
      donation.currency,
      donation.status,
      donation.recurring ? 'Yes' : 'No',
      donation.recurringInterval,
      donation.designation,
      donation.designation,
      donation.donationDate?.toISOString() ?? '',
      donation.amountRefunded?.toString() ?? '',
      donation.acknowledgementStatus,
      donation.acknowledgementSentAt?.toISOString() ?? ''
    ]);

    const csv = toCsv(headers, rows);

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="us4africa-donations.csv"'
    );

    return res.send(csv);
  } catch (error) {
    console.error('Donation CSV export failed:', error);

    return res.status(500).json({
      error: 'Unable to export donation records.'
    });
  }
});

export default router;