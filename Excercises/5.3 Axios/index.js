import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    const resultArray = Array.isArray(result) ? result : [result];
    console.log(response.data);
    res.render("index.ejs", { data: resultArray });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log("request body: \n" + JSON.stringify(req.body));
  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
  var activity_response;
  const participants = req.body.participants;
  const type = req.body.type;
  try {
    if (type === "" && participants === "") {
      activity_response = await axios.get(
        "https://bored-api.appbrewery.com/random"
      );
    } else {
      activity_response = await axios.get(
        `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
      );
    }
    console.log("activity response data: \n" + JSON.stringify(activity_response.data));
    const resultArray = Array.isArray(activity_response.data) ? activity_response.data : [activity_response.data];
    res.render("index.ejs", { data: resultArray });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    if (error.message.includes("404")) {
      let msg = "No activities that match your criteria.";
      res.render("index.ejs", {
        error: msg,
      });
    } else {
      res.render("index.ejs", {
        error: error.message,
      });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
