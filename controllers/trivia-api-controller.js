
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

module.exports = triviaapiController;