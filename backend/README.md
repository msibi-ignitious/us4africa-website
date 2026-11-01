# US4Africa backend starter

Node.js + Express + PostgreSQL + Prisma + Resend. Includes a donor/donation schema, health check, Donorbox V2 webhook signature verification, idempotent webhook event handling, donor upsert, donation persistence and a thank-you email after a verified `paid` event.

## Requirements
- Node.js 20+
- PostgreSQL
- Donorbox custom webhook access
- Resend account and a verified sender domain

## Windows / PowerShell setup
1. Extract this folder into `C:\Users\ignis\US4Africa2.0\backend`.
2. Open a terminal in `backend`.
3. Run `npm install` then `Copy-Item .env.example .env`.
4. Create a PostgreSQL database called `us4africa`.
5. Edit `.env` with your database password, Donorbox secret and Resend credentials.
6. Run `npm run db:generate`, then `npm run db:migrate`.
7. Run `npm run dev`.
8. Check `http://localhost:4000/api/health`.

## Resend
Create a Resend account, verify a domain you control, create an API key, and set `RESEND_API_KEY` and `EMAIL_FROM` in `.env`. The sender must use your verified domain. `Admin@us4africa.org` can be the reply-to address if it is monitored.

## Donorbox
Custom webhooks are included on Pro/Premium. Standard currently requires the API & Zapier add-on (listed at $17/month). In Donorbox, create a custom webhook using V2 payload format and subscribe to `donation.created` and `donation.updated`. Point it to `https://YOUR_API_DOMAIN/api/webhooks/donorbox`; copy that endpoint's Signature Secret into `DONORBOX_WEBHOOK_SECRET`.

The signature is checked against the exact raw body using the `Donorbox-Signature` timestamp and HMAC-SHA256 signature. Configure the endpoint only after deploying an HTTPS backend or use a secure temporary tunnel for development.

## Important
Only a verified webhook with status `paid` triggers the US4Africa acknowledgement. Donorbox remains responsible for payment processing and its official receipt. No card or bank details are stored. This is a starter: protected admin endpoints, retry queue/worker, audit and retention policies, backups, rate limiting and deployment hardening remain to be implemented before production. Email failures are recorded but automatic retries are not yet implemented.

## Endpoints
- `GET /` service info
- `GET /api/health` API/database health
- `POST /api/webhooks/donorbox` Donorbox V2 webhook
