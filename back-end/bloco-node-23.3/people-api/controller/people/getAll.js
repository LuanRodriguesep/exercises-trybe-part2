const service = require('../../service/people')
const rescue = require('express-rescue');

module.exports = rescue(async (_req, res) => {
  const people = await service.getAll()

  res.status(200).json(people);
});