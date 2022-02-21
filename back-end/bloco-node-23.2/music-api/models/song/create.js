const connection = require('../connection');

module.exports = async (name, genre) => {
  const [rows] = await connection.execute(`
    INSERT INTO songs (name, genre) VALUES (?, ?)
  `, [name, genre]);

  const result = {
    id: rows.insertId,
    name,
    genre,
  };
};