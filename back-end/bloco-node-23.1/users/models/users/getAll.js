const connection = require('../connection');

module.exports = async() => {
  const [result] =  await connection.execute(`
    SELECT * FROM users
  `);
  return result;
};