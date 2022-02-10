const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

const academia = ['supino', 'agachamento', 'rosca alternada', 'remada']

app.get('/series', (req, res) => {
  res.send(academia)
});

app.post('/series', (req, res) => {
  const { name } = req.body;
  academia.push(name)
  res.send(`Serie ${name} foi adicionada com sucesso`)
});

app.listen(3000, () => console.log("App rodando na porta 3000! TMJ"))