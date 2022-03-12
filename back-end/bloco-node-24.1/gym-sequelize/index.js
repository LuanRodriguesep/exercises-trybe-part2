const express = require('express');
const bodyParser = require('body-parser');

const gymController = require('./controllers/gym');

const app = express();

app.use(bodyParser.json());

app.use('/gym', gymController);

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!');
});