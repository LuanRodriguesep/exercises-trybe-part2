const model = require('../../models/people');

module.exports = async ({ id, name, age }) => {
  await model.findById(id);

  const updatePeople = await model.update(id, name, age);

  return updatePeople;

}