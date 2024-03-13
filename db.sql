-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema armcheckdb
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `armcheckdb` DEFAULT CHARACTER SET utf8 ;
USE `armcheckdb` ;

-- -----------------------------------------------------
-- Table `armcheckdb`.`especialistas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armcheckdb`.`especialistas` (
  `id_especialista` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `especialidad` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_especialista`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `armcheckdb`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armcheckdb`.`pacientes` (
  `id_persona` INT NOT NULL AUTO_INCREMENT,
  `id_especialista` INT NOT NULL,
  `nombres` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `edad` INT NOT NULL,
  `altura` FLOAT NOT NULL,
  `peso` FLOAT NOT NULL,
  `genero` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_persona`),
  INDEX `especialista_ref_idx` (`id_especialista` ASC) VISIBLE,
  CONSTRAINT `especialista_ref`
    FOREIGN KEY (`id_especialista`)
    REFERENCES `armcheckdb`.`especialistas` (`id_especialista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `armcheckdb`.`dispositivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armcheckdb`.`dispositivos` (
  `id_dispositivos` INT NOT NULL AUTO_INCREMENT,
  `sp32` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL,
  PRIMARY KEY (`id_dispositivos`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `armcheckdb`.`analisis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armcheckdb`.`analisis` (
  `id_analisis` INT NOT NULL AUTO_INCREMENT,
  `antebrazo` TINYINT NOT NULL,
  `brazo` TINYINT NOT NULL,
  `hombro` TINYINT NOT NULL,
  `nota` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_analisis`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `armcheckdb`.`consultas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armcheckdb`.`consultas` (
  `id_consultas` INT NOT NULL AUTO_INCREMENT,
  `id_analisis` INT NOT NULL,
  `id_dispositivo` INT NOT NULL,
  `id_paciente` INT NOT NULL,
  `fecha_consulta` DATE NOT NULL,
  PRIMARY KEY (`id_consultas`),
  INDEX `dispositivo_ref_idx` (`id_dispositivo` ASC) VISIBLE,
  INDEX `analisis_ref_idx` (`id_analisis` ASC) VISIBLE,
  INDEX `paciente_ref_idx` (`id_paciente` ASC) VISIBLE,
  CONSTRAINT `dispositivo_ref`
    FOREIGN KEY (`id_dispositivo`)
    REFERENCES `armcheckdb`.`dispositivos` (`id_dispositivos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `analisis_ref`
    FOREIGN KEY (`id_analisis`)
    REFERENCES `armcheckdb`.`analisis` (`id_analisis`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `paciente_ref`
    FOREIGN KEY (`id_paciente`)
    REFERENCES `armcheckdb`.`pacientes` (`id_persona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `armcheckdb`.`discapacidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armcheckdb`.`discapacidades` (
  `id_discapacidades` INT NOT NULL AUTO_INCREMENT,
  `id_paciente` INT NOT NULL,
  `nombre_discapacidad` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(150) NULL,
  PRIMARY KEY (`id_discapacidades`),
  INDEX `paciente_ref_discapacidades_idx` (`id_paciente` ASC) VISIBLE, -- Cambié el nombre de la restricción aquí
  CONSTRAINT `paciente_ref_discapacidades` -- Cambié el nombre de la restricción aquí
    FOREIGN KEY (`id_paciente`)
    REFERENCES `armcheckdb`.`pacientes` (`id_persona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
