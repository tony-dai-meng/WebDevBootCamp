import express from "express";
import bodyParser from "body-parser";
import fs from "node:fs";

const app = express();
const port = 3000;
var recipeJSON;
var data_instance;
//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
fs.readFile("./recipe.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  recipeJSON = JSON.parse(data);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs",{recipe: data_instance})
  
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  switch(req.body.choice){
    case "chicken":
      data_instance = recipeJSON[0];
      break;
    case "beef":
      data_instance = recipeJSON[1];
      break;
    case "fish":
      data_instance = recipeJSON[2];
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
