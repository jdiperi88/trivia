const db = require('../db/config');

const Questions = {};

Questions.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM question
    WHERE id = $1
  `, [id]);
};

Questions.create = (game_id, triviaData) => {
  return db.one(`
    INSERT INTO question
    (question, correct_answer, game_id)
    VALUES ($1, $2)
    RETURNING *
  `, [questions.question, questions.correct_answer, questions.game_id]);
};



// Questions.create = (game_id, triviaDataFromAPI) => {
//   return Promise.all(triviaDataFromAPI.map(questionFromAPI => {
//     return db.one(`INSERT INTO question (...)`,
//       [questionFromAPI.question, questionFromAPI.correct_answer, ...])
//     .then(questionInDatabase => {
//       return Promise.all(questionFromAPI.incorrect_answers.map(incorrectAnswer => {
//         return db.one(`INSERT INTO wrong_wrong ...`, 
//           [incorrectAnswer.question]);
//       }));
//     });
//   }));
// }


module.exports = Questions;