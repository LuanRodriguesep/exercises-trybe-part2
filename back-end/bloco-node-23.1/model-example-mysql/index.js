const express = require('express');

const app = express();

const port = 3000;

const author = require('./models/author');

app.get('/authors', async(_req, res) => {
  const authors = await author.getAll();

  res.status(200).json(authors)
})

app.post('')

app.listen(port, () => console.log('Ouvindo o exemplo na porta 3000'))