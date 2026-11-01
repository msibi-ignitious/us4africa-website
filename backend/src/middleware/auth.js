
import jwt from 'jsonwebtoken';
import { prisma } from '../db.js';
import { config } from '../config.js';

export async function requireAdmin(req, res, next) {
  try {
    const authorization = req.get('Authorization') || '';
    const [scheme, token] = authorization.split(' ');

    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({
        error: 'Authentication required.'
      });
    }

    const payload = jwt.verify(token, config.JWT_SECRET);

    if (!payload.sub) {
      return res.status(401).json({
        error: 'Invalid or expired token.'
      });
    }

    // Check the account on every request so deactivated
    // administrators immediately lose access.
    const admin = await prisma.admin.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true
      }
    });

    if (!admin || !admin.isActive) {
      return res.status(401).json({
        error: 'Administrator account is inactive or unavailable.'
      });
    }

    req.admin = admin;
    next();
  } catch {
    return res.status(401).json({
      error: 'Invalid or expired token.'
    });
  }
}
