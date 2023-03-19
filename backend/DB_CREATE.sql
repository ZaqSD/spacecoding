



-- post {
CREATE TABLE `spacecoding`.`post` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `tags` VARCHAR(45) NULL,
  `difficulty` INT NULL,
  `mediaPath` VARCHAR(45) NULL,
  `isChallenge` TINYINT NULL,
  PRIMARY KEY (`post_id`));
-- post }

FKs:
post -> createUser, programmingLanguage