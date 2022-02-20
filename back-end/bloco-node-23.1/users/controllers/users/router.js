const express = require('express');

const getAll = require('./getAll');
const create = require('./create');

const router = express.Router();

router.get('/', getAll);
router.post('/', create);

module.exports = router;