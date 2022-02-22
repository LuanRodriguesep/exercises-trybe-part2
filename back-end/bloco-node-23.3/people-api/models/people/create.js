const connection  = require('../connection');

module.exports = async (name, age) => {
  const people = await connection.execute(`
    INSERT INTO people (name, age) VALUES (?, ?)
  `, [name, age]);

  const result = {
    id: people.insertId,
    name,
    age,
  };
};