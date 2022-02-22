const connection = require('../connection');

module.exports = async () => {
  const [people] = await connection.execute(`
  SELECT * FROM people 
  `)

  return people;
};