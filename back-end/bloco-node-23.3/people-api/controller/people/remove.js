const service = require('../../service/people');
const rescue = require('express-rescue');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  await service.remove(id)
  res.status(204).end();
  
});