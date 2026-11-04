
//Donors

import { Router } from 'express';
import { z } from 'zod';

import { prisma } from '../db.js';
import { requireAdmin } from '../middleware/auth.js';

const router = Router();

// Every endpoint in this router requires administrator authentication.
router.use(requireAdmin);

const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().max(100).optional()
});

// GET /api/donors
// List donors, with pagination and optional search.
router.get('/', async (req, res) => {
  const parsed = paginationSchema.safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid pagination or search parameters.'
    });
  }

  const { page, limit, search } = parsed.data;

  const where = search
    ? {
        OR: [
          { firstName: { contains: search, mode: 'insensitive' } },
          { lastName: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } }
        ]
      }
    : {};

  try {
    const [donors, total] = await prisma.$transaction([
      prisma.donor.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          country: true,
          mailingConsent: true,
          createdAt: true,
          _count: {
            select: { donations: true }
          }
        }
      }),
      prisma.donor.count({ where })
    ]);

    return res.json({
      donors,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Donor listing failed:', error);

    return res.status(500).json({
      error: 'Unable to retrieve donors.'
    });
  }
});

// GET /api/donors/stats
// Summary statistics for the administrator dashboard.
router.get('/stats', async (_req, res) => {
  try {
    const [
      totalDonors,
      totalDonations,
      paidDonations,
      paidByCurrency,
      donationsByStatus
    ] = await Promise.all([
      prisma.donor.count(),
      prisma.donation.count(),
      prisma.donation.count({ where: { status: 'PAID' } }),
      prisma.donation.groupBy({
        by: ['currency'],
        where: { status: 'PAID' },
        _sum: { amount: true },
        _count: { _all: true }
      }),
      prisma.donation.groupBy({
        by: ['status'],
        _count: { _all: true }
      })
    ]);

    return res.json({
      totalDonors,
      totalDonations,
      paidDonations,
      paidTotalsByCurrency: paidByCurrency.map(item => ({
        currency: item.currency,
        amount: item._sum.amount?.toString() ?? '0',
        donations: item._count._all
      })),
      donationsByStatus: donationsByStatus.map(item => ({
        status: item.status,
        count: item._count._all
      }))
    });
  } catch (error) {
    console.error('Donor statistics failed:', error);

    return res.status(500).json({
      error: 'Unable to retrieve donor statistics.'
    });
  }
});



// GET /api/donors/analytics
// Detailed fundraising analytics for the administrator dashboard.
router.get('/analytics', async (_req, res) => {
  try {
    const now = new Date();

    const twelveMonthsAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 11,
      1
    );

    const [
      recurringBreakdown,
      donorTotals,
      monthlyDonations
    ] = await Promise.all([

      // Recurring versus one-time paid donations.
      prisma.donation.groupBy({
        by: ['recurring', 'currency'],
        where: { status: 'PAID' },
        _sum: { amount: true },
        _count: { _all: true }
      }),

      // Paid donations grouped by donor.
      prisma.donation.groupBy({
        by: ['donorId', 'currency'],
        where: { status: 'PAID' },
        _sum: { amount: true },
        _count: { _all: true }
      }),

      // Paid donations from the last 12 months.
      prisma.donation.findMany({
        where: {
          status: 'PAID',
          donationDate: {
            gte: twelveMonthsAgo
          }
        },
        select: {
          amount: true,
          currency: true,
          donationDate: true
        }
      })
    ]);

    // Retrieve donor details for highest contributors.
    const donorIds = [
      ...new Set(donorTotals.map(item => item.donorId))
    ];

    const donorRecords = await prisma.donor.findMany({
      where: {
        id: { in: donorIds }
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true
      }
    });

    const donorLookup = new Map(
      donorRecords.map(donor => [donor.id, donor])
    );

    // Calculate top donors.
    const topDonors = donorTotals
      .map(item => ({
        donor: donorLookup.get(item.donorId) ?? null,
        currency: item.currency,
        amount: item._sum.amount?.toString() ?? '0',
        donations: item._count._all
      }))
      .filter(item => item.donor !== null)
      .sort((a, b) => Number(b.amount) - Number(a.amount))
      .slice(0, 10);

    // Aggregate monthly donations separately by currency.
    const monthlyMap = new Map();

    for (const donation of monthlyDonations) {
      if (!donation.donationDate) continue;

      const month = [
        donation.donationDate.getFullYear(),
        String(
          donation.donationDate.getMonth() + 1
        ).padStart(2, '0')
      ].join('-');

      const key = `${month}-${donation.currency}`;
      const existing = monthlyMap.get(key);

      if (existing) {
        existing.amount += Number(donation.amount);
        existing.donations += 1;
      } else {
        monthlyMap.set(key, {
          month,
          currency: donation.currency,
          amount: Number(donation.amount),
          donations: 1
        });
      }
    }

    const monthlyTrends = [...monthlyMap.values()]
      .sort((a, b) =>
        a.month.localeCompare(b.month) ||
        a.currency.localeCompare(b.currency)
      )
      .map(item => ({
        ...item,
        amount: item.amount.toFixed(2)
      }));

    return res.json({
      recurringBreakdown: recurringBreakdown.map(item => ({
        type: item.recurring ? 'RECURRING' : 'ONE_TIME',
        currency: item.currency,
        amount: item._sum.amount?.toString() ?? '0',
        donations: item._count._all
      })),

      topDonors,
      monthlyTrends
    });

  } catch (error) {
    console.error('Fundraising analytics failed:', error);

    return res.status(500).json({
      error: 'Unable to retrieve fundraising analytics.'
    });
  }
});


// GET /api/donors/:id
// Retrieve one donor's profile.
router.get('/:id', async (req, res) => {
  const id = z.string().min(1).max(100).safeParse(req.params.id);

  if (!id.success) {
    return res.status(400).json({ error: 'Invalid donor ID.' });
  }

  try {
    const donor = await prisma.donor.findUnique({
      where: { id: id.data },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        country: true,
        mailingConsent: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: { donations: true }
        }
      }
    });

    if (!donor) {
      return res.status(404).json({ error: 'Donor not found.' });
    }

    return res.json({ donor });
  } catch (error) {
    console.error('Donor profile retrieval failed:', error);

    return res.status(500).json({
      error: 'Unable to retrieve donor profile.'
    });
  }
});


// GET /api/donors/:id/donations
// Retrieve a donor's donation history.
router.get('/:id/donations', async (req, res) => {
  const id = z.string().min(1).max(100).safeParse(req.params.id);

  if (!id.success) {
    return res.status(400).json({ error: 'Invalid donor ID.' });
  }

  const parsed = paginationSchema.pick({
    page: true,
    limit: true
  }).safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid pagination parameters.'
    });
  }

  const { page, limit } = parsed.data;

  try {
    const donor = await prisma.donor.findUnique({
      where: { id: id.data },
      select: { id: true }
    });

    if (!donor) {
      return res.status(404).json({ error: 'Donor not found.' });
    }

    const [donations, total] = await prisma.$transaction([
      prisma.donation.findMany({
        where: { donorId: id.data },
        orderBy: { donationDate: 'desc' },
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
          createdAt: true
        }
      }),
      prisma.donation.count({
        where: { donorId: id.data }
      })
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
    console.error('Donation history retrieval failed:', error);

    return res.status(500).json({
      error: 'Unable to retrieve donation history.'
    });
  }
});

export default router;