const connection = require('./connection');

const convertFieldNames = ({ id, title, directed_by, release_year }) => ({
  id,
  title,
  directedBy: directed_by,
  releaseYear: release_year,
});

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection.execute(
    'INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?)',
    [title, directedBy, releaseYear]
  );

  return {
    id: result.insertId,
  };
};

const getAll = async () => {
  const [movies] = await connection.execute('SELECT * FROM movies');

  return movies.map(convertFieldNames);
};

module.exports = {
  create,
  getAll,
};