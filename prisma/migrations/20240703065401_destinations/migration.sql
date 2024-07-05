-- CreateTable
CREATE TABLE `destinations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `category` VARCHAR(150) NOT NULL,
    `cover` VARCHAR(150) NOT NULL,
    `rate` DOUBLE NOT NULL,
    `rate_count` INTEGER NOT NULL,
    `location` VARCHAR(250) NOT NULL,
    `description` TEXT NOT NULL,
    `images` TEXT NOT NULL,
    `facilities` TEXT NOT NULL,

    FULLTEXT INDEX `destinations_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
