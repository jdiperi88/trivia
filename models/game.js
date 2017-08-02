const db = require('../db/config');

const Game = {};

Game.findBygameName = (game) => {
  return db.oneOrNone(`
    SELECT * FROM games
    WHERE id = $1
  `, [gamename]);
};

Game.create = (game) => {
  return db.one(`
    INSERT INTO games
    (category, number_of_questions,diffculty)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [game.gamename, game.password_digest, game.email, game.first_name, game.last_name]);
};

module.exports = Game;