require('isomorphic-fetch');
require('dotenv').config();



function getTrivia(req, res, next) {
    var  category = req.body.category
    var number_of_questions =req.body.number_of_questions
    var difficulty = req.body.difficulty
    console.log(category);
    console.log(number_of_questions);
  fetch(`https://opentdb.com/api.php?amount=${number_of_questions}&category=${category}&difficulty=${difficulty}&type=multiple`)
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

