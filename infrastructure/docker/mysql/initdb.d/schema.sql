-- MySQL Script generated by MySQL Workbench
-- Sun Feb 27 16:42:41 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema thullo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema thullo
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `thullo` DEFAULT CHARACTER SET utf8 ;
USE `thullo` ;

-- -----------------------------------------------------
-- Table `thullo`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`users` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(256) NOT NULL,
  `password` VARCHAR(256) NOT NULL,
  `name` VARCHAR(256) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `uq_email_01` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`boards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`boards` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `admin_user_id` BIGINT NOT NULL COMMENT '作成者',
  `board_name` VARCHAR(64) NOT NULL,
  `board_description` TEXT NOT NULL,
  `public_scope_type` TINYINT NOT NULL COMMENT '公開範囲 0:非公開招待されたメンバーのみ、1:ワークスペースのメンバー全員、2:全公開',
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_boards_01_idx` (`admin_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_boards_01`
    FOREIGN KEY (`admin_user_id`)
    REFERENCES `thullo`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`users_boards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`users_boards` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NOT NULL,
  `board_id` BIGINT NOT NULL,
  `create_id` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_users_boards_01_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_users_boards_02_idx` (`board_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_boards_01`
    FOREIGN KEY (`user_id`)
    REFERENCES `thullo`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_boards_02`
    FOREIGN KEY (`board_id`)
    REFERENCES `thullo`.`boards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`user_icons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`user_icons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NOT NULL,
  `icon_s3_path` VARCHAR(128) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_user_icons_01_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_icons_01`
    FOREIGN KEY (`user_id`)
    REFERENCES `thullo`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`lists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`lists` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `board_id` BIGINT NOT NULL,
  `list_name` VARCHAR(64) NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_lists_01_idx` (`board_id` ASC) VISIBLE,
  CONSTRAINT `fk_lists_01`
    FOREIGN KEY (`board_id`)
    REFERENCES `thullo`.`boards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`cards` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `list_id` BIGINT NOT NULL,
  `admin_user_id` BIGINT NOT NULL,
  `title` VARCHAR(256) NOT NULL,
  `card_description` TEXT NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_cards_01_idx` (`list_id` ASC) VISIBLE,
  INDEX `fk_cards_02_idx` (`admin_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_cards_01`
    FOREIGN KEY (`list_id`)
    REFERENCES `thullo`.`lists` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cards_02`
    FOREIGN KEY (`admin_user_id`)
    REFERENCES `thullo`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`master_label_colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`master_label_colors` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `color_code` VARCHAR(8) NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`card_labels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`card_labels` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `color_id` BIGINT NOT NULL,
  `board_id` BIGINT NOT NULL,
  `label_name` VARCHAR(64) NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_labels_01_idx` (`color_id` ASC) VISIBLE,
  INDEX `fk_labels_02_idx` (`board_id` ASC) VISIBLE,
  CONSTRAINT `fk_labels_01`
    FOREIGN KEY (`color_id`)
    REFERENCES `thullo`.`master_label_colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_labels_02`
    FOREIGN KEY (`board_id`)
    REFERENCES `thullo`.`boards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`cards_labels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`cards_labels` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `card_id` BIGINT NOT NULL,
  `labal_id` BIGINT NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_cards_labels_01_idx` (`card_id` ASC) VISIBLE,
  INDEX `fk_cards_labels_02_idx` (`labal_id` ASC) VISIBLE,
  CONSTRAINT `fk_cards_labels_01`
    FOREIGN KEY (`card_id`)
    REFERENCES `thullo`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cards_labels_02`
    FOREIGN KEY (`labal_id`)
    REFERENCES `thullo`.`card_labels` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`card_comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`card_comments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `card_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  `comment` TEXT NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_card_comments_01_idx` (`card_id` ASC) VISIBLE,
  INDEX `fk_card_comments_02_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_card_comments_01`
    FOREIGN KEY (`card_id`)
    REFERENCES `thullo`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_card_comments_02`
    FOREIGN KEY (`user_id`)
    REFERENCES `thullo`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`users_cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`users_cards` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NOT NULL,
  `card_id` BIGINT NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_users_cards_01_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_users_cards_02_idx` (`card_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_cards_01`
    FOREIGN KEY (`user_id`)
    REFERENCES `thullo`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_cards_02`
    FOREIGN KEY (`card_id`)
    REFERENCES `thullo`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`card_images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`card_images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `card_id` BIGINT NOT NULL,
  `image` VARCHAR(256) NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_card_images_cards1_idx` (`card_id` ASC) VISIBLE,
  CONSTRAINT `fk_card_images_cards_01`
    FOREIGN KEY (`card_id`)
    REFERENCES `thullo`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`card_files`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`card_files` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `card_id` BIGINT NOT NULL,
  `file_s3_path` VARCHAR(256) NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_card_files_01_idx` (`card_id` ASC) VISIBLE,
  CONSTRAINT `fk_card_files_01`
    FOREIGN KEY (`card_id`)
    REFERENCES `thullo`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`card_start_dates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`card_start_dates` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `card_id` BIGINT NOT NULL,
  `start_date` DATETIME NOT NULL,
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_card_start_dates_cards1_idx` (`card_id` ASC) VISIBLE,
  CONSTRAINT `fk_card_start_dates_cards_01`
    FOREIGN KEY (`card_id`)
    REFERENCES `thullo`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `thullo`.`card_deadlines`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thullo`.`card_deadlines` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `card_id` BIGINT NOT NULL,
  `deadline` DATETIME NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_card_deadlines_cards1_idx` (`card_id` ASC) VISIBLE,
  CONSTRAINT `fk_card_deadlines_cards_01`
    FOREIGN KEY (`card_id`)
    REFERENCES `thullo`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
