const db = require('../db/config');

const Questions = {};

Questions.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM question
    WHERE id = $1
  `, [id]);
};

// Questions.create = (game_id, triviaData) => {
//   return db.one(`
//     INSERT INTO question
//     (question, correct_answer, game_id)
//     VALUES ($1, $2)
//     RETURNING *
//   `, [questions.question, questions.correct_answer, questions.game_id]);
// };


// code I am proudest of by farr!! 
Questions.create = (game_id, triviaData) => {
  return Promise.all(triviaData.map(questions => {
    return db.one(`INSERT INTO question 
                    (question,correct_answer,game_id)
                    VALUES
                    ($1,$2,$3)
                    RETURNING *`,
                    
      [questions.question, questions.correct_answer,game_id])
    .then(questionInDatabase => {
      return Promise.all(questions.incorrect_answers.map(incorrectAnswer => {
        return db.one(`INSERT INTO wrong_answer 
                    (incorrect_answer,question_id)
                    VALUES
                    ($1,$2)
                    RETURNING *`, 
          [incorrectAnswer, questionInDatabase.id]);
      }));
    });
  }));
}


module.exports = Questions;