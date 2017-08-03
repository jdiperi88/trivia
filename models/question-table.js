const db = require('../db/config');

const Questions = {};

Questions.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM question
    WHERE id = $1
  `, [id]);
};

Questions.create = (questions) => {
  return db.one(`
    INSERT INTO question
    (question, correct_answer)
    VALUES ($1, $2)
    RETURNING *
  `, [questions.question, questions.correct_answer]);
};

module.exports = Questions;