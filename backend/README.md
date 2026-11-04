# US4Africa Backend

Node.js + Express + PostgreSQL + Prisma + Resend.

This backend provides the foundation for US4Africa's donor and donation management system. It includes donor and donation data models, database connectivity, API health checks, and email acknowledgements through Resend.

## Requirements

- Node.js 20+
- PostgreSQL database
- Resend account
- A verified sender domain for outgoing emails

## Windows / PowerShell setup

1. Open a terminal in `C:\Users\ignis\US4Africa2.0\backend`.
2. Install dependencies:

   ```powershell
   npm install
   ```

3. Create your environment file:

   ```powershell
   Copy-Item .env.example .env
   ```

4. Configure your database connection and email settings in `.env`.
5. Generate the Prisma client:

   ```powershell
   npm run db:generate
   ```

6. Apply database migrations:

   ```powershell
   npm run db:migrate
   ```

7. Start the development server:

   ```powershell
   npm run dev
   ```

8. Check the health endpoint:

   `http://localhost:4000/api/health`

## Database

The backend uses PostgreSQL with Prisma ORM.

The database stores donor information, donation records, donation statuses and acknowledgement information.

**Important:** Existing donor and donation records must be preserved when modifying the database schema. Use new Prisma migrations for schema changes. Do not edit migrations that have already been applied to the database.

## Email notifications — Resend

Resend is used to send donor acknowledgement emails.

To configure it:

1. Create a Resend account.
2. Verify a domain you control.
3. Create an API key.
4. Configure the following variables in `.env`:

   - `RESEND_API_KEY`
   - `EMAIL_FROM`

The sender address must use your verified domain. `Admin@us4africa.org` can be configured as the reply-to address if it is monitored.

Email failures should be recorded so they can be investigated. Automatic retry handling may be added in a future development phase.

## Important

- The backend does not process card or bank payments.
- No card or bank account details should be stored in this database.
- Donation records must be handled securely.
- Email acknowledgements are sent through Resend.
- Protect administrative endpoints before production deployment.
- Configure database backups, access controls, rate limiting, logging and appropriate data-retention policies before production use.

## Endpoints

- `GET /` — Service information
- `GET /api/health` — API and database health check

Additional donor, donation and administrative endpoints are available through their respective API routes, where configured.

## Deployment

The backend is intended to be deployed as a Node.js service.

Production deployment requires:

- A hosted PostgreSQL database.
- Correct production environment variables.
- HTTPS enabled.
- A secure JWT secret.
- A configured frontend origin.
- Database migrations applied before the application serves production traffic.

Never commit `.env` files, API keys, database credentials or other secrets to Git.