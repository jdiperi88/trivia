const express = require('express');
const triviaRouter = express.Router();

const trivaApiHelper = require('../services/trivia/trivia_api_helper');
const triviaapiController = require('../controllers/trivia-api-controller');
const authHelper = require('../services/auth/auth-helpers')



triviaRouter.post('/',authHelper.loginRequired, triviaapiController.index);



module.exports = triviaRouter;