const express = require('express');

const getAll = require('./getAll');
const create = require('./create');
const findById = require('./findById');
const update = require('./update');
const partialUpdate = require('./partialUpdate');
const remove = require('./remove');

const router = express.Router();

router.get('/', getAll);
router.post('/', create);
router.get('/:id', findById);
router.put('/:id', update);
router.patch('/:id', partialUpdate);
router.delete('/:id', remove);

module.exports = router;