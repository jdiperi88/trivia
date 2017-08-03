const db = require('../db/config');

const wrong_answer = {};

wrong_answer.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM wrong_answer
    WHERE id = $1
  `, [id]);
};

wrong_answer.create = (wrong_answer) => {
  return db.one(`
    INSERT INTO wrong_answer
    (incorrect_answer)
    VALUES ($1)
    RETURNING *
  `, [wrong_answer.incorrect_answer]);
};

module.exports = wrong_answer;