const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const ping = {
  message:'pong'
};

const hello = [];
console.log(hello)
app.get('/ping', function (req, res) {
  res.status(200).json(ping)
});

app.post('/hello', function (req, res){
  const {name} = req.body;
  hello.push({name});
  res.status(201).json({message:`Hello, ${name}`});

})

app.listen(3000, () => {
  console.log(`Aplicação dos exercicios ouvindo na porta 3000`)
})