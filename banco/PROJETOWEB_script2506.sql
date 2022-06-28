CREATE TABLE usuario (
  idusuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(80) NOT NULL,
  senha VARCHAR(20) NOT NULL,
  cpf BIGINT NOT NULL,
  PRIMARY KEY (idusuario))
ENGINE = InnoDB;

insert into usuario (nome,email,senha,cpf) values ("joao", "teste@testes.com","senha",12345678900);

select * from usuario;

CREATE TABLE empresa (
  idempresa INT NOT NULL AUTO_INCREMENT,
  cnpj BIGINT NOT NULL,
  razao_social VARCHAR(200) NOT NULL,
  nome_fantasia VARCHAR(200) NOT NULL,
  PRIMARY KEY (idempresa))
ENGINE = InnoDB;

insert into empresa (cnpj,razao_social,nome_fantasia) values (12456789000123,"mequi","burguer");

select * from empresa;

CREATE TABLE endereco (
  idendereco INT NOT NULL AUTO_INCREMENT,
  rua VARCHAR(200) NOT NULL,
  numero VARCHAR(10) NOT NULL,
  cidade VARCHAR(200) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  idempresa INT NOT NULL,
  PRIMARY KEY (idendereco),
  CONSTRAINT fk_endereco_empresa FOREIGN KEY (idempresa) REFERENCES empresa (idempresa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

insert into endereco (rua,numero,cidade,bairro,estado,idusuario,idempresa) values ("rua","numero","bairro","cidade","sp",1,1);

select * from endereco;

CREATE TABLE telefone (
  idtelefone INT NOT NULL AUTO_INCREMENT,
  telefone1 BIGINT NOT NULL,
  telefone2 BIGINT NULL,
  idempresa INT NOT NULL,
  PRIMARY KEY (idtelefone),
  CONSTRAINT fk_telefone_empresa FOREIGN KEY (idempresa) REFERENCES empresa (idempresa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

insert into telefone (telefone1,telefone2,idusuario,idempresa) values (15998744562,15996872514,1,1);

select * from telefone;

CREATE TABLE ordemservico (
  idordemservico INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  tipo VARCHAR(45) NOT NULL,
  custo INT NOT NULL,
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

insert into ordemservico (nome,tipo,custo,prazo,descricao,idusuario,idempresa) values ("concerto de microondas","concerto",123456,"5 dias","vou fazer bastante coisa moça",1,1);

select * from ordemservico;


