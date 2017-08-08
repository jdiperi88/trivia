
CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS game
(
  id SERIAL PRIMARY KEY,
  category VARCHAR(255) NOT NULL,
  number_of_questions VARCHAR(255) NOT NULL,
  difficulty VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_game_join
(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  game_id INT REFERENCES game(id) NOT NULL,
  top_score INT  
);

CREATE TABLE IF NOT EXISTS score
(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  game_id INT REFERENCES game(id) NOT NULL,
  top_score INT  
);


CREATE TABLE IF NOT EXISTS question
(
  id SERIAL PRIMARY KEY,
  question VARCHAR(255),
  correct_answer VARCHAR(255),
  game_id INT REFERENCES game(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS wrong_answer
(
  id SERIAL PRIMARY KEY,
  incorrect_answer VARCHAR(255),
  question_id INT REFERENCES question(id) NOT NULL
);
