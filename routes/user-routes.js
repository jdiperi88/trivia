const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');
const triviaApiController =  require('../controllers/trivia-api-controller');

userRoutes.get('/', authHelpers.loginRequired, usersController.index);

userRoutes.post('/', authHelpers.loginRequired, triviaApiController.index);

userRoutes.get('/:id', authHelpers.loginRequired, usersController.show);

userRoutes.delete('/:id', authHelpers.loginRequired, usersController.delete);

module.exports = userRoutes;