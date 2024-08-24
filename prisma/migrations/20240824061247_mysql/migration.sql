-- CreateTable
CREATE TABLE `School` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` LONGTEXT NOT NULL,
    `aboutUs` LONGTEXT NOT NULL,
    `logo` LONGTEXT NOT NULL,
    `rating` DOUBLE NOT NULL DEFAULT 0,
    `locationMap` LONGTEXT NULL,
    `area` ENUM('Abids', 'Ameerpet', 'Bachupally', 'Banjara_Hills', 'Begumpet', 'Charminar', 'Gachibowli', 'Hitech_City', 'Kondapur', 'Madhapur', 'Mehdipatnam', 'Miyapur', 'Somajiguda') NOT NULL,
    `category` ENUM('PlaySchool', 'PrimaryStateBoard', 'HighStateBoard', 'InternationalStateBoard', 'ResidentialStateBoard', 'PrimaryCBSE', 'HighCBSE', 'InternationalCBSE', 'ResidentialCBSE', 'PrimaryICSE', 'HighICSE', 'InternationalICSE', 'ResidentialICSE', 'PrimaryIGCSE', 'HighIGCSE', 'InternationalIGCSE', 'ResidentialIGCSE', 'PreSchoolDayCare') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Merchant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` LONGTEXT NOT NULL,
    `aboutUs` LONGTEXT NOT NULL,
    `logo` LONGTEXT NOT NULL,
    `rating` DOUBLE NOT NULL DEFAULT 0,
    `locationMap` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` LONGTEXT NOT NULL,
    `location` LONGTEXT NOT NULL,
    `number` LONGTEXT NOT NULL,
    `website` LONGTEXT NULL,
    `facebook` LONGTEXT NULL,
    `youtube` LONGTEXT NULL,
    `instagram` LONGTEXT NULL,
    `twitter` LONGTEXT NULL,
    `linkedin` LONGTEXT NULL,
    `opening` LONGTEXT NULL,
    `schoolId` INTEGER NULL,
    `merchantId` INTEGER NULL,

    UNIQUE INDEX `Contact_schoolId_key`(`schoolId`),
    UNIQUE INDEX `Contact_merchantId_key`(`merchantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` LONGTEXT NOT NULL,
    `schoolId` INTEGER NULL,
    `merchantId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Video` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `src` LONGTEXT NOT NULL,
    `title` LONGTEXT NOT NULL,
    `schoolId` INTEGER NULL,
    `merchantId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` LONGTEXT NOT NULL,
    `message` LONGTEXT NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `rating` INTEGER NOT NULL,
    `schoolId` INTEGER NULL,
    `merchantId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `image` LONGTEXT NULL,
    `schoolId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Facility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` LONGTEXT NOT NULL,
    `schoolId` INTEGER NULL,
    `merchantId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Awards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `image` LONGTEXT NULL,
    `schoolId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Toppers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `image` LONGTEXT NULL,
    `schoolId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `Contact_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `Contact_merchantId_fkey` FOREIGN KEY (`merchantId`) REFERENCES `Merchant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_merchantId_fkey` FOREIGN KEY (`merchantId`) REFERENCES `Merchant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Video` ADD CONSTRAINT `Video_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Video` ADD CONSTRAINT `Video_merchantId_fkey` FOREIGN KEY (`merchantId`) REFERENCES `Merchant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_merchantId_fkey` FOREIGN KEY (`merchantId`) REFERENCES `Merchant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facility` ADD CONSTRAINT `Facility_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Awards` ADD CONSTRAINT `Awards_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Toppers` ADD CONSTRAINT `Toppers_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
