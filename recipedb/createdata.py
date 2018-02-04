f = open("data.sql", "w")

firstNames = ["Domingo",
"Celeste",
"Tresa",
"Kathe",
"Marla",
"Chadwick",
"Branden",
"Stacey",
"Aldo",
"Fe",
"Mana",
"Migdalia",
"Myesha",
"Shanna",
"Rosette",
"Taunya",
"Mohammad",
"Codi",
"Mckenzie",
"Mila",
"Teresia",
"Dustin",
"Lynelle",
"Tangela",
"Virgina",
"Dorthea",
"Olivia",
"Jesus",
"Brant",
"Henriette",
"Yang",
"Ranae",
"Kenda",
"Melda",
"Drusilla",
"Danika",
"Clemente",
"Lilliana",
"Nohemi",
"Donita",
"Beata",
"Kia",
"Kandace",
"Lashandra",
"Jerald",
"Rochel",
"Macie",
"Neda",
"Verna",
"Gino"]

recipes = [
"GlowStick",
"Lucirr",
"Keha",
"Wiggles",
"Sparkle",
"Cipanr",
"Ballon",
"Lasis",
"Blurp",
"ThantYeitha",
"FlyingFungus",
"Hynryac",
"Gullet",
"Sunshine",
"Dushan",
"Kaleida",
"Raich",
"Serenity",
"Glider",
"Castor",
"Silurian",
"Chimichanga",
"Noxious",
"Blink",
"CatLizard",
"Snuggles",
"Bellatrix",
"Echo",
"Lior",
"Iatosr",
"Enterprise",
"Hynraic",
"Flappy",
"NoshYothu",
"Raijin",
"Rainbows",
"Twinkle"
]

line = ""
#insert into users
for i in range(1, 10):
	line = "INSERT INTO user VALUES(" + str(i) + ", '" + firstNames[i] + "', 'temp.png');\n"
	f.write(line)

#insert into recipe
for i in range(1, 10):
	line = "INSERT INTO recipe VALUES(" + str(i) + ", '" + recipes[i] + "', 'temp.png', '15 min', '15 min', '30 min', '1. Cook 2. Server');\n"	
	f.write(line)

#insert into ingredient
for i in range(1, 20):
	line = "INSERT INTO ingredient VALUES(" + str(i) + ", '" + recipes[i] + "');\n"
	f.write(line)

#insert into event
for i in range(1, 20):
	line = "INSERT INTO event VALUES(" + str(i) + ", 'event" + str(i) + "', 'uci', NOW());\n"
	f.write(line)

#insert into event
c = 1
for i in range(1, 10):
	c2 = c + 1
	line = "INSERT INTO ingredientsInRecipe VALUES(" + str(i) + ", " + str(c) + ", '2 cups');\n"
	f.write(line)
	line = "INSERT INTO ingredientsInRecipe VALUES(" + str(i) + ", " + str(c2) + ", '1 cup');\n"
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
