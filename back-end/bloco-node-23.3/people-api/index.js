const express = require('express');
const bodyParser = require('body-parser');
const people = require('./controller/people/router')
const middlewaresError = require('./middleware')

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

// end points

app.use('/people', people);

app.use(middlewaresError.joiError);
app.use(middlewaresError.domainError);
app.use(middlewaresError.error);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
});