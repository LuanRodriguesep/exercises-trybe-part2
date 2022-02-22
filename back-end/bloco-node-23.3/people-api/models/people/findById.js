const connection = require('../connection');

module.exports = async (id) => {
  const found = await connection.execute(`
    SELECT * FROM people WHERE id = ?
  `, [id]);

  const people  = found[0];

  return people;
}