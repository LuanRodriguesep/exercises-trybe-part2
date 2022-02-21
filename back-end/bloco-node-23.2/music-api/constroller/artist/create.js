const model = require('../../models/artist');

module.exports = async (req, res) => {
  try {
    const { name, genre } = req.body;

    if (!name || !genre) {
      return res
        .status(422)
        .json({ message: "Campo `_name` ou `estadio`, não informados" });
    }

    const newArtist = await model.create( name, genre);
    res.status(201).json(newArtist);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar clube" });
  }
};