const express = require('express');
const artistRouter = require('./artist/router');
const songRouter = require('./song/router');

const root = express.Router({ mergeParams: true });

root.use('/artist', artistRouter);
root.use('/song', songRouter);

module.exports = root;