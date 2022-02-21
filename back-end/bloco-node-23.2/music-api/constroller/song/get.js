const model = require('../../models/song');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const song = await model.findById(id);

    if (!song) {
      res.status(404).end();
    }

    return res.status(200).send(song);
  } catch (err) {
    next(err);
  }
};