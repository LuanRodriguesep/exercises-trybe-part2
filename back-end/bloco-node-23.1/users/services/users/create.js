const model = require('../../models/users');

module.exports = async({ first_Name, last_Name, email, password }) => {
  return await model.create(first_Name, last_Name, email, password);
};