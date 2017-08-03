const Game = require('../models/game');
const joinTable = require('../models/join-table');
const questionTable = require('../models/question-table');
const wrongAnswerTable = require('../models/wrong-answer-table');
const authHelpers = require('../services/auth/auth-helpers');
const triviaApiHelper = require('../services/trivia/trivia_api_helper')

const gameController = {};



gameController.index = (req, res) => {
 
    console.log('herb');
    console.log(req.user.id);
    console.log(req.user.id);
    res.render('game/game-index', {
  });
}


gameController.create = (req, res) => {
   const triviaData = res.locals.trivia;
  Game.create({
    category: req.body.category,
    number_of_questions: req.body.number_of_questions,
    difficulty: req.body.difficulty,
  })
  joinTable.create({
    user_id: req.user.id,
  })
  questionTable.create({
    question: triviaData[0].question,
    correct_answer: triviaData[0].correct_answer

  })

   wrongAnswerTable.create({
     incorrect_answer: req.body.incorrect_answer[0],

  })
    .then(() => {
    res.redirect('/game');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};



module.exports = gameController;