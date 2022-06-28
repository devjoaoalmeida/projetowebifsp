CREATE TABLE usuario (
  idusuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(80) NOT NULL,
  senha VARCHAR(20) NOT NULL,
  cpf INT(11) NOT NULL,
  PRIMARY KEY (idusuario))
ENGINE = InnoDB;

CREATE TABLE empresa (
  idempresa INT NOT NULL AUTO_INCREMENT,
  cnpj INT NOT NULL,
  razao_social VARCHAR(200) NOT NULL,
  nome_fantasia VARCHAR(200) NOT NULL,
  PRIMARY KEY (idempresa))
ENGINE = InnoDB;

CREATE TABLE endereco (
  idendereco INT NOT NULL AUTO_INCREMENT,
  rua VARCHAR(200) NOT NULL,
  numero INT(10) NOT NULL,
  cidade VARCHAR(200) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  idusuario INT NOT NULL,
  idempresa INT NULL,
  PRIMARY KEY (idendereco),
  CONSTRAINT fk_endereco_usuario FOREIGN KEY (idusuario) REFERENCES usuario (idusuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_endereco_empresa FOREIGN KEY (idempresa) REFERENCES empresa (idempresa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE telefone (
  idtelefone INT NOT NULL AUTO_INCREMENT,
  pessoal INT(11) NOT NULL,
  residencial INT(11) NOT NULL,
  idusuario INT NOT NULL,
  idempresa INT NULL,
  PRIMARY KEY (idtelefone),
  CONSTRAINT fk_telefone_usuario FOREIGN KEY (idusuario) REFERENCES usuario (idusuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_telefone_empresa FOREIGN KEY (idempresa) REFERENCES empresa (idempresa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS ordemservico (
  idordemservico INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  tipo VARCHAR(45) NOT NULL,
  custo INT(10) NOT NULL,
  prazo VARCHAR(50) NOT NULL,
  descricao VARCHAR(140) NOT NULL,
  idusuario INT NOT NULL,
  idempresa INT NOT NULL,
  PRIMARY KEY (idordemservico),
  CONSTRAINT fk_ordemservico_usuario FOREIGN KEY (idusuario) REFERENCES usuario (idusuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_ordemservico_empresa FOREIGN KEY (idempresa) REFERENCES empresa (idempresa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


