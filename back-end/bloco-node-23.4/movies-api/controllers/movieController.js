const MoviesService = require('../services/movieService');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) {
    return res.status(422).json({
      code: 'invalid_input',
      message: 'invalid title, release year or directed by',
    });
  }

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  res.status(201).send('Filme criado com sucesso!');
};

const getAll = async (_req, res) => {
  const movies = await MoviesService.getAll();

  res.status(200).json(movies);
};

module.exports = {
  create,
  getAll,
};