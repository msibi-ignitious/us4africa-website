/*
  Warnings:

  - You are about to drop the column `donorboxCampaignId` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `donorboxCampaignName` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `donorboxDonationId` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `donorboxDonorId` on the `Donor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Donation_donorboxDonationId_key";

-- DropIndex
DROP INDEX "Donor_donorboxDonorId_key";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "donorboxCampaignId",
DROP COLUMN "donorboxCampaignName",
DROP COLUMN "donorboxDonationId";

-- AlterTable
ALTER TABLE "Donor" DROP COLUMN "donorboxDonorId";
