const getAll = require('./getAll');
const create = require('./create');
const findById = require('./findById');
const update = require('./update');
const remove = require('./remove');
const partialUpdate = require('./partialUpdate');

module.exports = {
  getAll,
  create,
  findById,
  update,
  partialUpdate,
  remove
};