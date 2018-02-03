CREATE DATABASE IF NOT EXISTS recipedb;
USE recipedb;

-- Used to make changes to tables without any errors in creating them
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS recipe;
DROP TABLE IF EXISTS ingredient;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS ingredientsInRecipe;
DROP TABLE IF EXISTS usersAtEvents;
DROP TABLE IF EXISTS usersRecipes;
DROP TABLE IF EXISTS recipesAtEvents;
SET FOREIGN_KEY_CHECKS=1;

-- Table structure for users
CREATE TABLE user (
    uid INTEGER NOT NULL,
    uname VARCHAR(50) NOT NULL,
    PRIMARY KEY(uid)
);

CREATE TABLE recipe (
    rid INTEGER NOT NULL,
    rname VARCHAR(100) NOT NULL,
    prepTime TIME,
    cookTime TIME,
    totalTime TIME,
    steps VARCHAR(2000),
    PRIMARY KEY(rid)
);

CREATE TABLE ingredient (
    iid INTEGER NOT NULL,
    iname VARCHAR(100) NOT NULL,
    PRIMARY KEY(iid)
);

CREATE TABLE event (
    eid INTEGER NOT NULL,
    ename VARCHAR(100) NOT NULL,
    location VARCHAR(200) NOT NULL,
    edate DATETIME NOT NULL,
    PRIMARY KEY(eid)
);

CREATE TABLE ingredientsInRecipe (
    recipeID INTEGER NOT NULL,
    ingredientID INTEGER NOT NULL,
    quantity VARCHAR(50) NOT NULL,
    FOREIGN KEY(recipeID) REFERENCES recipe(rid),
    FOREIGN KEY(ingredientID) REFERENCES ingredient(iid)
);

CREATE TABLE usersAtEvents (
    userID INTEGER NOT NULL,
    eventID INTEGER NOT NULL,
    role VARCHAR(20) NOT NULL,
    FOREIGN KEY(userID) REFERENCES user(uid),
    FOREIGN KEY(eventID) REFERENCES event(eid)
);

CREATE TABLE usersRecipes (
    userID INTEGER NOT NULL,
    recipeID INTEGER NOT NULL,
    FOREIGN KEY(userID) REFERENCES user(uid),
    FOREIGN KEY(recipeID) REFERENCES recipe(rid)
);

CREATE TABLE recipesAtEvents (
    eventID INTEGER NOT NULL,
    recipeID INTEGER NOT NULL,
    FOREIGN KEY(eventID) REFERENCES event(eid),
    FOREIGN KEY(recipeID) REFERENCES recipe(rid),
);
