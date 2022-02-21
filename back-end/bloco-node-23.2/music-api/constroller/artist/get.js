const model = require('../../models/artist');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const artist = await model.findById(id);

    if (!artist) {
      res.status(404).send({ message: 'Artista não encontrado' });
    }

    return res.status(200).send(artist);
  } catch (err) {
    next(err);
  }
};