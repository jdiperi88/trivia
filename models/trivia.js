const db = require('../db/config');

const triviaGame = {};

triviaGame.findGamesById = (id) => {
  return db.many(`
    select * from user_game_join
    join game on user_game_join.game_id = game.id
    where user_game_join.user_id = $1;
  `, [id]);
};

    // select * from user_game_join
    // join game on user_game_join.game_id = game.id
    // join question on user_game_join.game_id = question.game_id
    // join wrong_answer on question.id = wrong_answer.question_id
    // where user_game_join.user_id = $1;


triviaGame.MakeGame = (id) => {
  return db.many(`
    select * from game
    join question on game.id = question.game_id
    where game.id = $1 ;
  `, [id]);
};

triviaGame.GetWrongAnswers = (questionId) => {
  return db.many(`
    select * from wrong_answer
    where question_id = $1 ;
  `, [questionId]);
};

triviaGame.GetGame = (gameId) => {
  return triviaGame.MakeGame(gameId)
    .then(questions =>{
     return Promise.all(questions.map(question=>{
        return triviaGame.GetWrongAnswers(question.id)
          .then(incorrect_answers => {
            question.incorrect_answers = incorrect_answers
            console.log(question);
            return question
          })
      }))
    })
};

triviaGame.leaderboard = (user) => {
  return db.many(`
    SELECT * FROM score
    where user_id = $1 ;
  `, [user]);
};

triviaGame.score = (score,user,gameid) => {
  return db.one(`
    INSERT INTO score
    (user_id, game_id,top_score)
    VALUES 
    ($1, $2, $3)
    RETURNING *
  `, [user, gameid, score]);
};



module.exports = triviaGame;

// select * from user_game_join
// join game on user_game_join.game_id = game.id
// join question on user_game_join.game_id = question.game_id
// join wrong_answer on question.id = wrong_answer.question_id
// where user_game_join.user_id = 4;