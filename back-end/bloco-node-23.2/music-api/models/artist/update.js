const connection = require('../connection');

module.exports = async (id, name, genre) => {
  await connection.execute(`
    UPDATE artists
      SET name = ?, genre = ?
    WHERE id = ?
  `, [name, genre, id]);
  
  return { id, name, genre };
};