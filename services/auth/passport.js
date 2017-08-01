const passport = require('passport');
const User = require('../../models/user');

module.exports = () => {
  //check for the user
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });
//check 
  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};