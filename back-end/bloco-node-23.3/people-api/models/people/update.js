const connection = require('../connection');

module.exports = async (id, name, age) => {
  await connection.execute(`
  UPDATE people
    SET name = ?, age = ? WHERE id = ?
  `, [name, age, id]);

  return { id, name , age };
};