const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host:'localhost',
  user:'trybe',
  password:'trybe123',
  database:'rest_aula',
});

module.exports = connection;