const model = require('../../models/people');

module.exports = async (id) => {
  await model.remove(id)
};