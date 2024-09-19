-- AlterTable
ALTER TABLE `Image` MODIFY `alt` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `School` ADD COLUMN `showReviews` BOOLEAN NOT NULL DEFAULT false;
