const db = require('../db/config');

const User = {};

User.findByUserName = (username) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [username]);
};

User.create = (user) => {
  return db.one(`
    INSERT INTO users
    (username, password_digest, email, first_name,last_name)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.username, user.password_digest, user.email, user.first_name, user.last_name]);
};

module.exports = User;