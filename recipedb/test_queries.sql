USE recipedb;

#Note, most constants should be replaced with variables. This is just for reference.
# To get the auto_incremented id, need to use a KeyHolder

# Need to get recipes for an event
SELECT r.rid, r.rname, r.recipepic, r.prepTime, r.cookTime, r.totalTime, r.steps 
FROM recipe as r, recipesAtEvents as re
WHERE r.rid = re.recipeID and re.eventID = 1;

# Need to get recipes from a person
SELECT r.rid, r.rname, r.recipepic, r.prepTime, r.cookTime, r.totalTime, r.steps 
FROM recipe as r, usersRecipes as ur
WHERE r.rid = ur.recipeID and ur.userID = 1;

# Need to select all of the ingredients for a recipe
SELECT i.iname, iir.quantity
FROM ingredient as i, ingredientsInRecipe as iir
WHERE i.iid = iir.ingredientid and iir.recipeID = 1;


# Need to add recipes
INSERT INTO recipe (rname, recipepic, prepTime, cookTime, totalTime, steps) VALUES('Lucirr', 'temp.png', '15 min', '15 min', '30 min', '1. Cook 2. Server');

# Need to add ingredients
INSERT INTO ingredient (iname, quantity) VALUES('chicken', '3 tbps');
INSERT INTO ingredientsInRecipe VALUES(1, 1); 

# Need to add events
INSERT INTO event (ename, location, edate) VALUES('wow', 'uci', NOW());

# Need to get event
SELECT *
FROM event as e
WHERE e.eid = 1;

# Need to add recipes to events
INSERT INTO recipesAtEvents VALUES(1, 1);

# Need to add people to events
INSERT INTO usersAtEvents VALUES(2, 3, 'participant');