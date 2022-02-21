const model = require('../../models/artist');
const rescue = require("express-rescue");

module.exports = rescue(async (req, res) => {
    const { id } = req.params;
    const { name, genre } = req.body;

    const artist = await model.findById(id)

    if (!artist) {
      return res
        .status(404)
        .json({ message: `Artista com id "${id}" não encontrado.` });
    }
    const result = await model.update(id, name, genre);

    return res.status(200).json(result);
  });