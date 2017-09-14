# TOP FACT

## Heroku Link
* [Top Fact Heroku Link](https://enigmatic-coast-60319.herokuapp.com/)

## What is Top Fact?

* Built using express in the backend and the EJS template engine in the frontend, Top Fact is an application that connects to the open trivia API. It allows users to register and create their own customized trivia game. Their game is saved in five PSQL tables where they can re-render it at anytime.

![alt text](public/images/login.png "Login")
![alt text](public/images/gameSelection.png "Game Selection")

## Technical Discussion

* I needed to create wire frames highlighting the amount of items and elements need to be created and when each portion of data would be requested and stored.

* The first portion was creating the data/model structure. I needed to populate four different sql tables so that I can store the specific game the user requested and return to it later. The main purpose for this was to implement socket i.o and invite friends to the game, but I did not get around to it.

* After the layout and data structure was created, I had a good idea of the views I wanted to render. I began creating routes to implement those data structures.

* I then created the views with css and html structures in collaboration with database/javascript to piece together the project. I tested each phase.

* I ran into some issues trying to delete items since the tables are all dependent on eachother in some manner. 

## Links/Resources

* main background image 
http://all4desktop.com/data_images/1280%20x%20720/4180453-hi-tech-planet.jpg




