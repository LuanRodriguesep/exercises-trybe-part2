const model = require('../../models/people');

module.exports = async () => {
  return model.getAll();
};