create table usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);


INSERT INTO usuarios (nome,email,idade) VALUES ("Felipe", "felipe@teste.com", 35);

INSERT INTO usuarios (nome,email,idade) VALUES ("Juju", "juju@teste.com", 23);

INSERT INTO usuarios (nome,email,idade) VALUES ("Antonio", "antonio@teste.com", 23);


DELETE FROM usuarios where nome="felipe";

UPDATE usuarios SET nome ="Nome de Teste" WHERE nome="Antonio";