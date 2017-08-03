const db = require('../db/config');

const Game = {};

Game.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM games
    WHERE id = $1
  `, [id]);
};

Game.create = (game) => {
  return db.one(`
    INSERT INTO games
    (category, number_of_questions,difficulty)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [game.category, game.number_of_questions, game.difficulty]);
};

module.exports = Game;