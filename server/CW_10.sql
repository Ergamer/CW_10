CREATE DATABASE `cw_10` DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci;
USE `cw_10`;

CREATE TABLE `categories` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title` VARCHAR(255) NOT NULL
);
    
CREATE TABLE `news` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `image` VARCHAR(45) NOT NULL,
    `date_publication` DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `comments` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `news_id` INT NOT NULL,
    `author` VARCHAR(255),
    `comment`VARCHAR(255) NOT NULL,
    FOREIGN KEY (`news_id`)
    REFERENCES news (`id`)
);
INSERT INTO `news` (`title`, `content`, `image`)
VALUES ('bfdnlbnfd', 'fb fdkb dfkbn', '');
INSERT INTO `comments` (`author`, `comment`,`news_id`)
VALUES ('NVjnsfjn', 'flvnfdlbnfdlbn', 1);