const connection = require('../connection');

module.exports = async (id) => {
  const [row] = await connection.execute(`
    SELECT * FROM  artists WHERE id = ?
  `, [id]);
  const artist = row[0];
  return artist;
};