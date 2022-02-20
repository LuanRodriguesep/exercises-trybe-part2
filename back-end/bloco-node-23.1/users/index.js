const express = require('express');
const bodyParser = require('body-parser');

const middlewares = require('./controllers/middlewares');
const users = require('./controllers/users/router');
const PORT = 3000

const app = express();

app.use(bodyParser.json());

// ENDPOINTS

app.use('/users', users)
app.use(middlewares.error);




app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}` )
});