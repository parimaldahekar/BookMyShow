const express = require("express"); // Express.js web application framework
const app = express(); // Creating an instance of the express application
const { connection } = require("./connector"); // Database connection function
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing (CORS)
const bodyParser = require("body-parser"); // Middleware to parse HTTP request body

// Setting the port number for the application to listen on
const PORT = process.env.PORT;

// Body parser middleware to parse urlencoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Body-parser middleware to parse JSON data
app.use(bodyParser.json());

app.use(cors()); // Enabling CORS for all routes

// Calling the database connection function
connection();

// Setting up the API routes
app.use("/api", require("./routes"));

// Starting the server to listen on the specified port
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

// Exporting the express application to be used in other parts of the application
module.exports = app;