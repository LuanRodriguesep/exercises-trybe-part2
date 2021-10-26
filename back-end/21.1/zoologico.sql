-- criar tabela animal

CREATE TABLE Animal (
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  especie VARCHAR(45),
  sexo VARCHAR(45),
  idade INT NOT NULL,
  localizacao VARCHAR(45)
);

-- criar tabela cuidadores

CREATE TABLE Cuidador (
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES Gerente(gerente_id)
);

--criar tabela gerente 

CREATE TABLE Gerente (
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45)
);

-- criar tabela cuidador e animal

CREATE TABLE Cuidador_e_Animal (
  cuidador_id INT,
  animal_id INT,
  CONSTRAINT PRIMARY KEY (cuidador_id, animal_id),
  FOREIGN KEY (cuidador_id) REFERENCES Cuidador (cuidador_id),
  FOREIGN KEY (animal_id) REFERENCES Animal (animal_id)
);


SELECT * FROM Animal;
SELECT * FROM Gerente;
SELECT * FROM Cuidador;
SELECT * FROM Cuidador_e_Animal;

-- Antes de fazer a comparação com o gabarito que a Trybe disponibiliza, eu nao havia criado a quarta entidade, fui ajustando alguns pontos que ficaram despercebidos, como alguns NOT NULL que deixei faltando.
-- Com a pratica vamos nos aperfeiçoando. 