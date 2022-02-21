const model = require('../../models/song');
const rescue = require("express-rescue");

module.exports = rescue(async (req, res) => {
    const { id } = req.params;
    const { name, genre } = req.body;

    const song = await model.findById(id)

    if (!song) {
      return res
        .status(404)
        .json({ message: `Song com id "${id}" não encontrado.` });
    }
    const result = await model.update(id, name, genre);

    return res.status(200).json(result);
  });