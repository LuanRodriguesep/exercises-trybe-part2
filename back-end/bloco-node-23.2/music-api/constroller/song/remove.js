const model = require('../../models/song');
const rescue = require("express-rescue");

module.exports = rescue(async (req, res) => {
  const { id } = req.params;

  await model.remove(id);

  res.status(204).end();
});