const model = require('../../models/song');

module.exports = async (_req, res, next) => {
  try {
    const song = await model.getAll()

    return res.status(200).send(song);
  } catch (err) {
    next(err);
  }
};