-- CreateEnum
CREATE TYPE "Place" AS ENUM ('Abids', 'Ameerpet', 'Bachupally', 'Banjara_Hills', 'Begumpet', 'Charminar', 'Gachibowli', 'Hitech_City', 'Kondapur', 'Madhapur', 'Mehdipatnam', 'Miyapur', 'Somajiguda');

-- AlterTable
ALTER TABLE "School" ADD COLUMN     "whereLocation" "Place" NOT NULL DEFAULT 'Abids',
ALTER COLUMN "rating" SET DEFAULT 0;
