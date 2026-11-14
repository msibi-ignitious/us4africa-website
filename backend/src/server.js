
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

// Allowed frontend origins
const allowedOrigins = config.FRONTEND_ORIGIN.map(
  origin => origin.replace(/\/$/, '')
);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an Origin header (server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.warn(`CORS blocked origin: ${origin}`);
    return callback(null, false);
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(helmet());

app.use(express.json({ limit: '100kb' }));

app.get('/', (_req, res) => {
  res.json({
    name: 'US4Africa API',
    version: '1.0.0'
  });
});

// API routes
app.use('/api/health', healthRouter);
app.use('/api/auth', authRouter);
app.use('/api/donors', donorsRouter);
app.use('/api/donations', donationsRouter);
app.use('/api/exports', exportsRouter);

// Error handling
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    error: 'Unexpected server error.'
  });
});

const server = app.listen(config.PORT, () => {
  console.log(`US4Africa API listening on ${config.PORT}`);
  console.log('Allowed frontend origins:', allowedOrigins);
});

async function shutdown() {
  server.close();
  await prisma.$disconnect();
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
