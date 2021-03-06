const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const htmlEntity = require('html-entities');

const app = express();
require('dotenv').config();

//middleware 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.render('index');
});

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

const triviaapiRoutes = require('./routes/triviaapiRoutes');
app.use('/trivia', triviaapiRoutes);

const gameRoutes = require('./routes/game-routes');
app.use('/game', gameRoutes);