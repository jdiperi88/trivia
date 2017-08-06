const User = require('../models/user');
const bcrypt = require('bcryptjs');
const GameData = require('../models/trivia');

const usersController = {};

usersController.index = (req, res) => {
    GameData.findGamesById(req.user.id)
    .then(data =>{
      console.log(data);
  res.render('user/user-index', {
      user: req.user,
      data: data,
  }) 
    });
};

usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/game');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

module.exports = usersController;