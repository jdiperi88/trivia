const express = require('express');
const gameRouter = express.Router();

const trivaApiHelper = require('../services/trivia/trivia_api_helper');
const gameController = require('../controllers/game-controller');
const authHelper = require('../services/auth/auth-helpers')

gameRouter.get('/', gameController.index);

gameRouter.post('/', gameController.create);

module.exports = gameRouter;