const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'trybe123',
  host: 'localhost',
  database: 'model_example'
});

// const main = async () => {
//   const [rows] = await connection.execute('SELECT * FROM characters');
//   console.log(rows);

//   connection.end();
// }

// main()

module.exports = connection;