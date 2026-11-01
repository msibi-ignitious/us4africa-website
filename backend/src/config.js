
import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(4000),

  DATABASE_URL: z.string().min(1),
  FRONTEND_ORIGIN: z.string().url().default('http://localhost:5173'),

  DONORBOX_WEBHOOK_SECRET: z.string().min(1),
  DONORBOX_MAX_SIGNATURE_AGE_SECONDS: z.coerce.number().int().positive().default(300),

  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().optional(),
  EMAIL_REPLY_TO: z.string().email().optional(),

  JWT_SECRET: z.string().min(64),
  JWT_EXPIRES_IN: z.string().default('8h')
});

export const config = schema.parse(process.env);
