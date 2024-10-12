import express from "express";
import bodyParser from "body-parser";
/*ifs don't work for EJS :(
It doesn't scope the variable.
Use locals.fruits in order to access all variables that get sent over as res.render("ejs_file_name.ejs")p
pass as post request
*/
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./index.ejs", {message: "Enter your name below 👇"});
});

app.post("/submit", (req, res) => {
  let len = req.body["fName"].length + req.body["lName"].length;
  res.render("./index.ejs", {namelength: len})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
