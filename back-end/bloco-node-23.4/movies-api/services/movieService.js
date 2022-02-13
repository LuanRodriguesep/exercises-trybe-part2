const MoviesModel = require('../models/movieModel');

const create = async ({ title, directedBy, releaseYear }) => {
  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getAll = async () => {
  return MoviesModel.getAll();
};

module.exports = {
  create,
  getAll,
};