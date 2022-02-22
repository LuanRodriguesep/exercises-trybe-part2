const model = require('../../models/people');

module.exports = async ({ name, age }) => {
  return model.create(name, age);
}