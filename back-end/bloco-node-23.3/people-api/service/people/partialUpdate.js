const model = require('../../models/people');

module.exports = async (id, data) => {
  const currentPeople = await model.findById(id);

  const newPeopleData = {
    ...currentPeople,
    ...data,
  };

  const updatedPeople = await model.update({ id, ...newPeopleData });

  return updatedPeople;
};