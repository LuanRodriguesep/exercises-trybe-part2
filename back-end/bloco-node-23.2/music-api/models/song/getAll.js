const connection = require('../connection');

module.exports = async() => {
  const [rows] = await connection.execute('SELECT * FROM songs')
  return rows;
};