const connection  = require('../connection');

module.exports = async (id) => {
  await connection.execute(`
    DELETE FROM artists WHERE id = ?
  `, [id]);
}