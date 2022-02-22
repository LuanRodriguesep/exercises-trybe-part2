const model = require('../../models/people');

module.exports = async (id) => {
  const people = await model.findById(id);

  if (!people) {
    throw { code : 'not found', message: `Pessoa com id ${id} não encontrada` };
  }
  return people;
};