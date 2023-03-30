// This module exports three arrays containing movie names, slots, and seat numbers.
// These arrays are used to populate the dropdown menus in the booking form.

// Array of available movie titles
const moviesList = [
  "Suraj par mangal bhari",
  "Tenet",
  "The war with grandpa",
  "The personal history of David Copperfield",
  "Come Play",
];

// Array of available time slots
const slots = ["10:00 AM", "01:00 PM", "03:00 PM", "08:00 PM"];

// Array of available seat numbers
const seats = ["A1", "A2", "A3", "A4", "D1", "D2"];

// Export the arrays as named exports
exports.moviesList = moviesList;
exports.slots = slots;
exports.seats = seats;
