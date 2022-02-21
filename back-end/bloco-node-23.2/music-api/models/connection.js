const mysql = require('mysql2/promise');

const connection  = mysql.createPool({
  host:'localhost',
  user:'trybe',
  password:'trybe123',
  database:'music'
});

// const main = async () => {
//   const [rows] = await connection.execute('SELECT * FROM artists');

//   console.log(rows);

//   connection.end();
// };

// main()

module.exports = connection;