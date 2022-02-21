const connection  = require('../connection');

module.exports = async (id) => {
  await connection.execute(`
    DELETE FROM songs WHERE id = ?
  `, [id]);
}