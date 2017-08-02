require('isomorphic-fetch');
require('dotenv').config();

function getTrivia(req, res, next) {
  fetch(`https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      console.log(jsonRes);
      res.locals.trivia = jsonRes.results;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
}

module.exports = {
  getTrivia,
}

