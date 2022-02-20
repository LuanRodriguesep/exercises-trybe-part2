const model = require('../../models/users');

module.exports = async() => {
  return await model.getAll();
};
