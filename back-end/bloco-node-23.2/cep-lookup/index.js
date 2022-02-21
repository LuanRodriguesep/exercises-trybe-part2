require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cepRouter = require('./controllers/router');
const errorMiddleware = require('./middlewares/error.js');

const app = express();
app.use(bodyParser);
app.use(errorMiddleware);

// END-POINTS
app.use('/cep', cepRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});