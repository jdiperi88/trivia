
const triviaModel = require('../models/trivia');
const authHelpers = require('../services/auth/auth-helpers')
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const triviaapiController = {};


triviaapiController.index = (req, res) => {
  console.log(req.body.game_id)
  triviaModel.GetGame(req.body.game_id)
    .then(data => {
      console.log(data)
      var decodedData = []
      for (var q of data) {
        var decodedQ = {
          question: entities.decode(q.question),
          correct_answer: entities.decode(q.correct_answer),
          incorrect_answers: q.incorrect_answers
         
          // incorrect_answers_two: q.incorrect_answers[1],
          // incorrect_answers_three: q.incorrect_answers[2]
        }
        decodedData.push(decodedQ)
      }


      res.render('trivia/trivia-index', {
        data: data,
        question_data: decodedData
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err})
    })
}

triviaapiController.score = (req, res) => {
  console.log(req.body.points, req.user.id, req.body.gameid/req.body.questions);
  triviaModel.score(req.body.points, req.user.id, req.body.gameid)
    .then(data =>{
          res.render('trivia/score', {
            points: req.body.points,
            user: req.user.username,
            questions: req.body.questions,
            score: data.score
                })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

triviaapiController.leaderboard = (req, res) => {

  triviaModel.leaderboard(req.user.id)
    .then(data =>{
          console.log(data)
          res.render('trivia/leaderboard', {
            score: data,
            user: req.user.username
                })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}


module.exports = triviaapiController;