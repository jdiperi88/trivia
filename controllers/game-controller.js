const Game = require('../models/game');
const gameController = {};

gameController.index = (req, res) => {
    console.log('herb');
    res.render('game/game-index', {
  });
}

gameController.create = (req, res) => {
  Game.create({
    category: req.body.category,
    number_of_questions: req.body.number_of_questions,
    difficulty: req.body.difficulty
  }).then(() => {
    res.redirect('/game');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};



module.exports = gameController;