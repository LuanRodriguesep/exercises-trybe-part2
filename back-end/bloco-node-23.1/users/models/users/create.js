const connection = require('../connection');

module.exports = async (first_Name, last_Name, email, password) => {
  const [newUser] = await connection.execute(`
    INSERT INTO users (first_Name, last_Name, email, password)
    VALUES (?, ?, ?, ?)
  `, [first_Name, last_Name, email, password]);

  const result = {
    id: newUser.insertId,
    first_Name,
    last_Name,
    email,
    password,
  };
};
