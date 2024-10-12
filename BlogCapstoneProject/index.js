import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
let a = [];
/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs",{a:a});
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", (req, res, next) => {
  a.push(req.body);
  res.redirect('/')
})

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
