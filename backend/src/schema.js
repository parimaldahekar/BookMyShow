// Require Mongoose library
const mongoose = require("mongoose");

// Destructure the Schema object from Mongoose
const { Schema } = mongoose;

// Define the Schema for the movie booking
const bookMovieSchema = new Schema({
  // The name of the movie being booked is set to string
  movie: { type: String },
  // The time slot for the movie is set to string
  slot: { type: String },
  // The object is created for the seat number with number  type
  seats: {
    A1: { type: Number },
    A2: { type: Number },
    A3: { type: Number },
    A4: { type: Number },
    D1: { type: Number },
    D2: { type: Number },
  },
});

// Export the schema as a Mongoose model with the name "bookmovietickets"
module.exports = mongoose.model("bookmovietickets", bookMovieSchema);
