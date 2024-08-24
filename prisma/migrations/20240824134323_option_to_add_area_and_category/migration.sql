/*
  Warnings:

  - You are about to drop the column `area` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `School` table. All the data in the column will be lost.
  - Added the required column `areaId` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `School` DROP COLUMN `area`,
    DROP COLUMN `category`,
    ADD COLUMN `areaId` INTEGER NOT NULL,
    ADD COLUMN `categoryId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Place` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Place_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `School` ADD CONSTRAINT `School_areaId_fkey` FOREIGN KEY (`areaId`) REFERENCES `Place`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `School` ADD CONSTRAINT `School_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
