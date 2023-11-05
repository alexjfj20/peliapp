const { getAll } = require('../controllers/genres.controllers');
const express = require('express');

const genresRouter = express.Router();

genresRouter.route('/')
    .get(getAll)

module.exports = genresRouter;