-- Establecer valores originales para UNIQUE_CHECKS, FOREIGN_KEY_CHECKS y SQL_MODE
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=1;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=1;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';

-- Creación del esquema armcheckdb si no existe
CREATE SCHEMA IF NOT EXISTS `armcheckdb` DEFAULT CHARACTER SET utf8mb4 ;
USE `armcheckdb` ;

-- Creación de la tabla `analisis`
CREATE TABLE IF NOT EXISTS `analisis` (
  `id_analisis` INT NOT NULL AUTO_INCREMENT,
  `id_unico` VARCHAR(45) NOT NULL,
  `arreglo_datos` TEXT NOT NULL,
  PRIMARY KEY (`id_analisis`),
  UNIQUE KEY `id_unico_UNIQUE` (`id_unico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla `dispositivos`
CREATE TABLE IF NOT EXISTS `dispositivos` (
  `id_dispositivos` INT NOT NULL AUTO_INCREMENT,
  `sp32` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL,
  PRIMARY KEY (`id_dispositivos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla `especialistas`
CREATE TABLE IF NOT EXISTS `especialistas` (
  `id_especialista` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `especialidad` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_especialista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla `pacientes`
CREATE TABLE IF NOT EXISTS `pacientes` (
  `id_persona` INT NOT NULL AUTO_INCREMENT,
  `id_especialista` INT NOT NULL,
  `nombres` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `edad` INT NOT NULL,
  `altura` FLOAT NOT NULL,
  `peso` FLOAT NOT NULL,
  `genero` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `id_especialista_idx` (`id_especialista`),
  CONSTRAINT `id_especialista`
    FOREIGN KEY (`id_especialista`)
    REFERENCES `especialistas` (`id_especialista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creación de la tabla `consultas`
CREATE TABLE IF NOT EXISTS `consultas` (
  `id_consultas` INT NOT NULL AUTO_INCREMENT,
  `id_unico` VARCHAR(45) NOT NULL,
  `id_dispositivo` INT NOT NULL,
  `id_paciente` INT NOT NULL,
  `fecha_consulta` DATE NOT NULL,
  PRIMARY KEY (`id_consultas`),
  KEY `id_unico_idx` (`id_unico`),
  KEY `id_dispositivo_idx` (`id_dispositivo`),
  KEY `id_paciente_idx` (`id_paciente`),
  CONSTRAINT `fk_consultas_analisis`
    FOREIGN KEY (`id_unico`)
    REFERENCES `analisis` (`id_unico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consultas_dispositivos`
    FOREIGN KEY (`id_dispositivo`)
    REFERENCES `dispositivos` (`id_dispositivos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consultas_pacientes`
    FOREIGN KEY (`id_paciente`)
    REFERENCES `pacientes` (`id_persona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Creación de la tabla `pagos`
CREATE TABLE IF NOT EXISTS `pagos` (
  `id_pagos` INT NOT NULL AUTO_INCREMENT,
  `id_especialista` INT NOT NULL,
  `fecha_inicio` DATE NOT NULL DEFAULT (CURRENT_DATE()),
  `fecha_fin` DATE NOT NULL,
  `numero_tarjeta` VARCHAR(45) NOT NULL,
  `cvv` VARCHAR(45) NOT NULL,
  `fecha_vencimiento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_pagos`),
  KEY `id_especialista_pago_idx` (`id_especialista`),
  CONSTRAINT `id_especialista_pago`
    FOREIGN KEY (`id_especialista`)
    REFERENCES `especialistas` (`id_especialista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Restaurar valores originales de UNIQUE_CHECKS, FOREIGN_KEY_CHECKS y SQL_MODE
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;