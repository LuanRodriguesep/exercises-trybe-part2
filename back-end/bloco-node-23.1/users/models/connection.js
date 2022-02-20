const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user:'trybe',
  password:'trybe123',
  host:'localhost',
  database:'users_crud',
});

module.exports = connection;

  // const main = async () => {
  //   const [rows] = await connection.execute('SELECT * FROM users');
  
  //   console.log(rows);
  
  //   connection.end();
  // };

  // main()