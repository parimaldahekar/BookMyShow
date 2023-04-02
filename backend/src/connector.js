require("dotenv").config(); // Used to load environment variables from .env file
const { MongoClient } = require("mongodb"); // MongoDB driver for Node.js
let mongoose = require("mongoose"); // Mongoose is a MongoDB object modeling tool
mongoose.set("strictQuery", true); // Setting mongoose query mode to 'strict'

// Getting MongoDB connection URI from environment variables
const mongoURI = process.env.MONGODBURI;

// Function to connect to MongoDB using mongoose library
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, // Used to parse MongoDB connection string
      useUnifiedTopology: true, // Used to enable new Server Discover and Monitoring engine
    });
    console.log("Connected to MongoDB!"); // Connection success message
  } catch (error) {
    console.log("Error while connecting to MongoDB", error); // Connection error message
  }
};

// Exporting the function to be used in other parts of the application
exports.connection = connectToMongo;
