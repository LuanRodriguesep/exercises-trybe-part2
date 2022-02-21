const express = require ('express');
const error = require('./middleware/error');
const bodyParser = require('body-parser');
const root = require('./constroller/router')

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

// End points

app.use('/', root);




app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
})