/*
  Warnings:

  - You are about to drop the column `whereLocation` on the `School` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "School" DROP COLUMN "whereLocation",
ADD COLUMN     "area" "Place" NOT NULL DEFAULT 'Abids';
