
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { config } from './config.js';
import { prisma } from './db.js';

import healthRouter from './routes/health.js';
import authRouter from './routes/auth.js';
import donorsRouter from './routes/donors.js';
import donationsRouter from './routes/donations.js';
import exportsRouter from './routes/exports.js';

const app = express();

app.use(helmet());

app.use(cors({
  origin: config.FRONTEND_ORIGIN.split(',').map(x => x.trim()),
  methods: ['GET', 'POST'],
  allowedHeaders: [
    'Content-Type',
    'Authorization'
  ]
}));

app.use(express.json({ limit: '100kb' }));

app.get('/', (_req, res) => {
  res.json({
    name: 'US4Africa API',
    version: '1.0.0'
  });
});

app.use('/api/health', healthRouter);
app.use('/api/auth', authRouter);
app.use('/api/donors', donorsRouter);
app.use('/api/donations', donationsRouter);
app.use('/api/exports', exportsRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    error: 'Unexpected server error.'
  });
});

const server = app.listen(config.PORT, () => {
  console.log(`US4Africa API listening on ${config.PORT}`);
});

async function shutdown() {
  server.close();
  await prisma.$disconnect();
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
