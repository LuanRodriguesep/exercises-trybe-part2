const express = require('express');
const cep = require('../controllers/cepControllers');

const router = express.Router();

router.get('/:cep', cep.findAddressByCep);

module.exports = {
  router,
};