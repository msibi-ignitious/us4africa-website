/*
  Warnings:

  - You are about to drop the column `campaignId` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `campaignName` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `refundedAmount` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `eventType` on the `WebhookEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "campaignId",
DROP COLUMN "campaignName",
DROP COLUMN "refundedAmount",
ADD COLUMN     "amountRefunded" DECIMAL(12,2),
ADD COLUMN     "donorboxCampaignId" TEXT,
ADD COLUMN     "donorboxCampaignName" TEXT,
ADD COLUMN     "recurringInterval" TEXT;

-- AlterTable
ALTER TABLE "WebhookEvent" DROP COLUMN "eventType",
ADD COLUMN     "eventName" TEXT;
