CREATE DATABASE projetoweb;

CREATE TABLE IF NOT EXISTS `projetoweb`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `cpf` VARCHAR(12) NOT NULL,
  `idusuario` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `projetoweb`.`empresa` (
  `idempresa` INT NOT NULL AUTO_INCREMENT,
  `cnpj` VARCHAR(50) NOT NULL,
  `razao_social` VARCHAR(200) NOT NULL,
  `nome_fantasia` VARCHAR(200) NOT NULL,
  `idusuario` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idempresa`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `projetoweb`.`endereco` (
  `idendereco` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(100) NOT NULL,
  `numero` VARCHAR(10) NOT NULL,
  `cidade` VARCHAR(100) NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  `idcliente` INT NOT NULL,
  `idempresa` INT NOT NULL,
  PRIMARY KEY (`idendereco`),
  INDEX `fk_endereco_cliente_idx` (`idcliente` ASC) VISIBLE,
  INDEX `fk_endereco_empresa1_idx` (`idempresa` ASC) VISIBLE,
  CONSTRAINT `fk_endereco_cliente`
    FOREIGN KEY (`idcliente`)
    REFERENCES `projetoweb`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_endereco_empresa1`
    FOREIGN KEY (`idempresa`)
    REFERENCES `projetoweb`.`empresa` (`idempresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `projetoweb`.`telefone` (
  `idtelefone` INT NOT NULL AUTO_INCREMENT,
  `pessoal` VARCHAR(15) NULL,
  `residencial` VARCHAR(15) NULL,
  `idcliente` INT NOT NULL,
  `idempresa` INT NOT NULL,
  PRIMARY KEY (`idtelefone`),
  INDEX `fk_telefone_cliente1_idx` (`idcliente` ASC) VISIBLE,
  INDEX `fk_telefone_empresa1_idx` (`idempresa` ASC) VISIBLE,
  CONSTRAINT `fk_telefone_cliente1`
    FOREIGN KEY (`idcliente`)
    REFERENCES `projetoweb`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_telefone_empresa1`
    FOREIGN KEY (`idempresa`)
    REFERENCES `projetoweb`.`empresa` (`idempresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `projetoweb`.`ordemservico` (
  `idordemservico` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `custo` VARCHAR(10) NOT NULL,
  `prazo` VARCHAR(50) NOT NULL,
  `descricao` VARCHAR(200) NULL,
  `idcliente` INT NOT NULL,
  `idservico` VARCHAR(150) NOT NULL,
  `idorcamento` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idordemservico`),
  INDEX `fk_ordemservico_cliente1_idx` (`idcliente` ASC) VISIBLE,
  CONSTRAINT `fk_ordemservico_cliente1`
    FOREIGN KEY (`idcliente`)
    REFERENCES `projetoweb`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;




