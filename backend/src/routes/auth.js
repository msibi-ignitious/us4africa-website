
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { rateLimit } from 'express-rate-limit';
import { z } from 'zod';

import { prisma } from '../db.js';
import { config } from '../config.js';
import { requireAdmin } from '../middleware/auth.js';

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    error: 'Too many login attempts. Please try again later.'
  }
});

const loginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(1).max(200)
});

router.post('/login', loginLimiter, async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Please provide a valid email and password.'
    });
  }

  const email = parsed.data.email.trim().toLowerCase();
  const { password } = parsed.data;

  try {
    const admin = await prisma.admin.findUnique({
      where: { email }
    });

    // Use the same response for an unknown email and wrong password.
    if (!admin || !admin.isActive) {
      return res.status(401).json({
        error: 'Invalid email or password.'
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.passwordHash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        error: 'Invalid email or password.'
      });
    }

    const token = jwt.sign(
      {
        sub: admin.id,
        role: admin.role
      },
      config.JWT_SECRET,
      {
        expiresIn: config.JWT_EXPIRES_IN,
        issuer: 'us4africa-api',
        audience: 'us4africa-admin'
      }
    );

    return res.json({
      message: 'Login successful.',
      token,
      tokenType: 'Bearer',
      expiresIn: config.JWT_EXPIRES_IN,
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Admin login failed:', error);

    return res.status(500).json({
      error: 'Unable to process login.'
    });
  }
});

// Protected endpoint to check the current administrator's session.
router.get('/me', requireAdmin, (req, res) => {
  return res.json({
    admin: req.admin
  });
});

export default router;
