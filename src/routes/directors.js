const { getAll } = require('../controllers/directors.controllers');
const express = require('express');

// se crea la rutas

const directorsRouter = express.Router();

directorsRouter.route('/')
    .get(getAll)

module.exports = directorsRouter;

