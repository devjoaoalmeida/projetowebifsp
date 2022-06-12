CREATE DATABASE projetoweb;

CREATE SCHEMA IF NOT EXISTS projetoweb DEFAULT CHARACTER SET utf8 ;
USE projetoweb;

-- -----------------------------------------------------
-- Table `projetoweb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE cliente (
  idcliente INT NOT NULL AUTO_INCREMENT,
  cpf INT(15) NOT NULL,
  idusuario VARCHAR(200) NOT NULL,
  PRIMARY KEY (idcliente))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `projetoweb`.`empresa`
-- -----------------------------------------------------
CREATE TABLE empresa (
  idempresa INT NOT NULL AUTO_INCREMENT,
  cnpJ INT(20) NOT NULL,
  razao_social VARCHAR(200) NOT NULL,
  nome_fantasia VARCHAR(200) NOT NULL,
  idusuario VARCHAR(200) NOT NULL,
  PRIMARY KEY (idempresa))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `projetoweb`.`endereco`
-- -----------------------------------------------------
CREATE TABLE endereco (
  idendereco INT NOT NULL AUTO_INCREMENT,
  rua VARCHAR(50) NOT NULL,
  numero INT(10) NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  bairro VARCHAR(50) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  idcliente INT NULL,
  idempresa INT NULL,
  PRIMARY KEY (idendereco),
  CONSTRAINT fk_endereco_cliente FOREIGN KEY (idcliente) REFERENCES cliente(idcliente)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_endereco_empresa FOREIGN KEY (idempresa) REFERENCES empresa(idempresa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `projetoweb`.`telefone`
-- -----------------------------------------------------
CREATE TABLE telefone (
  idtelefone INT NOT NULL AUTO_INCREMENT,
  pessoal INT(15) NULL,
  residencial INT(15) NULL,
  idcliente INT NULL,
  idempresa INT NULL,
  PRIMARY KEY (idtelefone),
  CONSTRAINT fk_telefone_cliente FOREIGN KEY (idcliente) REFERENCES cliente(idcliente)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_telefone_empresa FOREIGN KEY (idempresa) REFERENCES empresa(idempresa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `projetoweb`.`ordemservico`
-- -----------------------------------------------------
CREATE TABLE ordemservico (
  idordemservico INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  custo INT(10) NOT NULL,
  prazo VARCHAR(50) NOT NULL,
  descricao VARCHAR(100) NULL,
  idcliente INT NOT NULL,
  idservico VARCHAR(200) NOT NULL,
  idorcamento VARCHAR(200) NOT NULL,
  PRIMARY KEY (idordemservico),
  CONSTRAINT fk_ordemservico_cliente FOREIGN KEY (idcliente) REFERENCES cliente(idcliente)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
