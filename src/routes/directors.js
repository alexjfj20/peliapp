const { getAll } = require('../controllers/directors.controllers');
const express = require('express');

const directorsRouter = express.Router();

directorsRouter.route('/')
    .get(getAll)

module.exports = directorsRouter;