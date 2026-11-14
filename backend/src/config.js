
import 'dotenv/config';
import { z } from 'zod';

const frontendOriginsSchema = z.string()
  .default('http://localhost:5173')
  .transform(value =>
    value.split(',').map(origin => origin.trim()).filter(Boolean)
  )
  .pipe(
    z.array(z.string().url()).min(1)
  );

const schema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(4000),

  DATABASE_URL: z.string().min(1),
  FRONTEND_ORIGIN: frontendOriginsSchema,

  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().optional(),
  EMAIL_REPLY_TO: z.string().email().optional(),

  JWT_SECRET: z.string().min(64),
  JWT_EXPIRES_IN: z.string().default('8h')
});

export const config = schema.parse(process.env);
