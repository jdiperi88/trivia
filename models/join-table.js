const db = require('../db/config');

const joinTable = {};

joinTable.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM user_game_join
    WHERE id = $1
  `, [id]);
};

joinTable.create = (game) => {
  return db.one(`
    INSERT INTO user_game_join
    (user_id, game_id)
    VALUES ($1, $2)
    RETURNING *
  `, [game.user_id, game.game_id]);
};

module.exports = joinTable;