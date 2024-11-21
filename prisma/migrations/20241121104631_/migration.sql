/*
  Warnings:

  - Added the required column `uri` to the `Newsletter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Newsletter` ADD COLUMN `uri` LONGTEXT NOT NULL,
    MODIFY `image` LONGTEXT NOT NULL;
