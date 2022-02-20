const service = require('../../services/users');
const rescue = require('express-rescue');

module.exports = rescue(async (req, res) => {
  const allUsers =  await service.getAll();
  res.status(200).json(allUsers);
})