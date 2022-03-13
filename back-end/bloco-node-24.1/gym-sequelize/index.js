const express = require('express');
const bodyParser = require('body-parser');

const gymRouter = require('./controllers/gym');
const instructorRouter = require('./controllers/instructor');
const methodRouter = require('./controllers/method');

const app = express();

app.use(bodyParser.json());

app.use('/gym', gymRouter);
app.use('/instructor', instructorRouter);
app.use('/method', methodRouter);

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!');
});