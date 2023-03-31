const express = require("express");
const router = express.Router(); // Creating an instance of the express router
const Schema = require("./schema"); // Importing the booking schema from the schema.js file
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing (CORS)
const bodyParser = require("body-parser"); // Middleware to parse HTTP request body

// Body-parser middleware to parse urlencoded data
router.use(bodyParser.urlencoded({ extended: false }));

// Express middleware to parse JSON data
router.use(express.json());

// Route to handle booking request
router.post("/booking", async (req, res) => {

// Extracting data from the request body
const { movie, slot, seats } = req.body;

// Creating a new instance of the booking schema with the extracted data
const myData = new Schema({ movie, slot, seats });

// Saving the new booking data to the database
const saved = await myData.save();

if (saved) {
// Sending a success response with the saved booking data
res.status(200).json({ data: myData, message: "Booking Successful!" });
} else {
// Sending an error response with a null data if the booking is not successful
res.status(500).json({
data: null,
message: "Something went wrong!. Please try again.",
});
}
});

// Route to get the data of the most recent booking
router.get("/booking", async (req, res) => {
const myData = await Schema.find().sort({ _id: -1 }).limit(1); // Finding the most recent booking data from the database
if (myData.length === 0) {
// Sending a response with a null data and a message if no booking data is found
res.status(200).json({ data: null, message: "No previous booking found!" });
} else {
// Sending a success response with the most recent booking data if found
res.status(200).json({ data: myData[0] });
}
});

// Exporting the router to be used in other parts of the application
module.exports = router;





