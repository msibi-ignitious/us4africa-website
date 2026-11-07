import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { prisma } from '../src/db.js';

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('A valid ADMIN_EMAIL is required.');
  }

  if (!password || password.length < 12) {
    throw new Error('ADMIN_PASSWORD must be at least 12 characters.');
  }

  const existing = await prisma.admin.findUnique({
    where: { email }
  });

  if (existing) {
    throw new Error('An administrator with this email already exists.');
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.admin.create({
    data: {
      email,
      passwordHash,
      role: 'ADMIN'
    }
  });

  console.log(`Administrator account created: ${email}`);
}

main()
  .catch((error) => {
    console.error('Admin setup failed:', error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
