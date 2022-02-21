const model = require('../../models/artist');

module.exports = async (_req, res, next) => {
  try {
    const artists = await model.getAll()

    return res.status(200).send(artists);
  } catch (err) {
    next(err);
  }
};