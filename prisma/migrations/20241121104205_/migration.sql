-- CreateTable
CREATE TABLE `Newsletter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `schoolId` INTEGER NOT NULL,

    UNIQUE INDEX `Newsletter_schoolId_key`(`schoolId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Newsletter` ADD CONSTRAINT `Newsletter_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `School`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
