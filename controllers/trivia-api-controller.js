
const triviaModel = require('../models/trivia');
const authHelpers = require('../services/auth/auth-helpers')
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const triviaapiController = {};

triviaapiController.index = (req, res) => {
  console.log(req.body.game_id);
  triviaModel.GetGame(req.body.game_id)
    .then(data =>{
          console.log(data);

          res.render('trivia/trivia-index', {
            data: data,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
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