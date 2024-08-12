-- CreateEnum
CREATE TYPE "SchoolCategory" AS ENUM ('PlaySchool', 'PrimaryStateBoard', 'HighStateBoard', 'InternationalStateBoard', 'ResidentialStateBoard', 'PrimaryCBSE', 'HighCBSE', 'InternationalCBSE', 'ResidentialCBSE', 'PrimaryICSE', 'HighICSE', 'InternationalICSE', 'ResidentialICSE', 'PrimaryIGCSE', 'HighIGCSE', 'InternationalIGCSE', 'ResidentialIGCSE', 'PreSchoolDayCare');

-- AlterTable
ALTER TABLE "School" ADD COLUMN     "category" "SchoolCategory" NOT NULL DEFAULT 'HighCBSE';
