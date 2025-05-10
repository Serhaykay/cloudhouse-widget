-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `shop` VARCHAR(255) NOT NULL,
    `state` VARCHAR(255) NOT NULL,
    `isOnline` BOOLEAN NOT NULL DEFAULT false,
    `scope` TEXT,
    `expires` DATETIME,
    `accessToken` TEXT NOT NULL,
    `userId` BIGINT,
    `firstName` VARCHAR(255),
    `lastName` VARCHAR(255),
    `email` VARCHAR(255),
    `accountOwner` BOOLEAN NOT NULL DEFAULT false,
    `locale` VARCHAR(50),
    `collaborator` BOOLEAN DEFAULT false,
    `emailVerified` BOOLEAN DEFAULT false
);
