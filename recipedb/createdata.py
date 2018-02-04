f = open("data.sql", "w")

events = [
"Friendsgiving",
"Graduation Party",
"Spring Break Reunion",
"New Year's Countdown",
"Grandpa's Birthday",
"4th of July BBQ"]

firstNames = ["Dominic",
"Celeste",
"Trisha",
"Katherine",
"Marla",
"Chad",
"Brandon",
"Stacey",
"Aldwin",
"Fidelito",
"Manasi",
"Migdalia",
"Myesha",
"Shanaya",
"Rosette",
"Taunya",
"Muhammad",
"Cody",
"Mckenzie",
"Marishka",
"Theressa",
"Dustin",
"Lynne",
"Sadhana",
"Virginia",
"Melody",
"Olivia",
"Jesus",
"Brant",
"Henriette",
"Sumin",
"Travis",
"Kenny",
"Erin",
"Drew",
"Danika",
"Clementine",
"Lilliana",
"Nohemi",
"Donita",
"Zhulin",
"Kia",
"Kandace",
"Lashandra",
"Jeraldo",
"Rochel",
"Marcie",
"Shay",
"Xiadani",
"Gino"]

recipes = [
"Walnut Pound Cake",
"Pork Potstickers",
"Chicken Casserole",
"Creamy Mashed Potatoes",
"Rainbow White Cake",
"Fudge Brownies with Sprinkles",
"Egg Drop Soup",
"Feta Pita Pizza",
"Buttermilk Biscuits",
"Seafood Chowder",
"Buttermilk Waffles",
"Grandma's Peach Pie",
"Baked Ziti",
"Swedish Meatballs",
"Egg Custard",
"Vegetarian Beef Jerky",
"Scrambled Eggs",
"Fried Rice",
"Apple Custard Cups",
"Croissant Bread Pudding",
"Dinner Crepe",
"Caramel Apples",
"Cinnamon Apple Sauce",
"Classic Cheeseburger",
"Japanese Curry",
"Potato Salad",
"Tea Eggs",
"Omurice",
"Perfect Omelette",
"Surstromming",
"Honey Challah",
"Chicken Fajitas",
"Cheese and Spinach quesadilla",
"Angel Food Cake",
"Mango Tiramisu",
"Leche Flan",
"Shrimp and Pineapple Kebab",
"Teriyaki Beef and Broccoli",
"Beef Brisket"
]

ingredients =
["water",
"eggs",
"milk",
"flour",
"butter",
"sugar",
"salt",
"vanilla extract",
"honey",
"chicken breast",
"chicken soup",
"beef",
"potatos",
"apples",
"cheese",
"scallion",
"mayo",
"pineapple",
"brocolli",
"mango"
]

line = ""
#insert into users
for i in range(1, len(firstNames)):
    line = "INSERT INTO user VALUES(" + str(i) + ", '" + firstNames[i] + "', 'temp.png');\n"
    f.write(line)

#insert into recipe
for i in range(1, len(recipes)):
    line = "INSERT INTO recipe VALUES(" + str(i) + ", '" + recipes[i] + "', 'temp.png', '15 min', '15 min', '30 min', '1. Cook 2. Serve');\n"	
    f.write(line)

#insert into ingredient
for i in range(1, len(ingredients)):
    line = "INSERT INTO ingredient VALUES(" + str(i) + ", '" + ingredients[i] + "', '2 units');\n"
    f.write(line)

#insert into event
for i in range(1, len(events)):
    line = "INSERT INTO event VALUES(" + str(i) + ", '" + events[i] + "', 'uci', NOW());\n"
    f.write(line)

#insert ingredients into recipe
c = 1
for i in range(1, 10):
    c2 = c + 1
    line = "INSERT INTO ingredientsInRecipe VALUES(" + str(i) + ", " + str(c) + ");\n"
    f.write(line)
    line = "INSERT INTO ingredientsInRecipe VALUES(" + str(i) + ", " + str(c2) + ");\n"
    f.write(line)
    c += 1

for i in range(1, 10):
    line = "INSERT INTO usersAtEvents VALUES(" + str(i) + ", " + str(i) + ", 'participant');\n"
    f.write(line)

for i in range(1, 10):
    c2 = c + 1
    line = "INSERT INTO usersRecipes VALUES(" + str(i) + ", " + str(i) + ");\n"
    f.write(line)

for i in range(1, 10):
    c2 = c + 1
    line = "INSERT INTO recipesAtEvents VALUES(" + str(i) + ", " + str(i) + ");\n"
    f.write(line)