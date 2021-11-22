Exercício 1 : Retorne o documento com _id igual a 8.
Copiar
db.bios.find({ _id: 8 })
Exercício 2 : Retorne o documento com _id igual a 8, mas só exiba os campos: _id e name .
Copiar
db.bios.find({ _id: 8 }, { name: 1 })
Exercício 3 : Retorne apenas os campos name e birth do documento com _id igual a 8.
Copiar
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 })
Exercício 4 : Retorne todos os documentos em que o campo name.first seja igual a John , utilizando o método pretty() .
Copiar
db.bios.find({ "name.first": "John" }).pretty()
Exercício 5 : Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty() .
Copiar
db.bios.find().limit(3).pretty()
Exercício 6 : Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
Copiar
db.bios.find().skip(5).limit(2)
Como importar o arquivo books.json
Para importar a coleção books para um banco chamado class , utilize o comando abaixo:
Copiar
mongoimport --db class --collection books <caminho_do_arquivo>
Apost a importação, selecione o banco class no seu cliente:
Copiar
use class
Exercício 7 : Retorne a quantidade de documentos da coleção books .
Copiar
db.books.count()
Exercício 8 : Conte quantos livros existem com o status "PUBLISH" .
Copiar
db.books.count(
    { status: "PUBLISH" }
)