const express = require('express');
const gameRouter = express.Router();

const trivaApiHelper = require('../services/trivia/trivia_api_helper');
const gameController = require('../controllers/game-controller');
const authHelper = require('../services/auth/auth-helpers')

gameRouter.get('/',authHelper.loginRequired, gameController.index);

gameRouter.post('/',authHelper.loginRequired,trivaApiHelper.getTrivia, gameController.create);

module.exports = gameRouter;