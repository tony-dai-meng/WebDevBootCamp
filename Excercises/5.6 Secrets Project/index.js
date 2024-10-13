// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// 2. Create an express app and set the port number.
const app = express();
const port = 3001;
const randomEndpoint = "https://secrets-api.appbrewery.com/random";

app.use(bodyParser.urlencoded({ extended: true }));

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
    const result = await axios.get(randomEndpoint);
    res.render("index.ejs", 
        { secret: result.data.secret, user: result.data.username});
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});