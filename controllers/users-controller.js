const User = require('../models/user');
const bcrypt = require('bcryptjs');
const triviaModel = require('../models/trivia');

const usersController = {};

usersController.index = (req, res) => {
    triviaModel.findGamesById(req.user.id)
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

usersController.show = (req, res) => {
  User.findById(req.params.id)
    .then(data => {
      console.log(data);
      res.render('user/single-game', {
        data: data,
        username:req.user.username
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

usersController.delete = (req, res) => {
  User.destroy(req.params.id)
    .then(() => {
      res.redirect('user/user-index');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

module.exports = usersController;