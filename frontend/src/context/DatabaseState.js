import React, { useState, useEffect } from "react";
import DatabaseContext from "./DatabaseContext";

const DatabaseState = (props) => {
  // State variables for managing the seats
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [time, changeTime] = useState("");
  const [movie, changeMovie] = useState("");
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  // Function for making a POST request to the server with the booking details
  const handlePostBooking = async () => {
    // Sending API request to backend with user selected movie, slot and seats to book movie
    const response = await fetch(`https://bookmyshow-4i5c.onrender.com/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
    });

    const data = await response.json();

    // Showing error popup if the response status is other than 200
    setErrorPopup(true);
    setErrorMessage(data.message);

    // Clearing the form and the local storage if the response status is 200
    if (response.status === 200) {
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
      setLastBookingDetails(data.data);

      window.localStorage.clear();
    }
  };

  // Function for making a GET request to the server to get the last booking details
  const handleGetLastBooking = async () => {
    const response = await fetch(`https://bookmyshow-4i5c.onrender.com/api/booking`, {
      method: "GET",
    });

    const data = await response.json();
    // Setting last booking details received from the backend
    setLastBookingDetails(data.data);
  };

  // Getting movies, slot and seats from local storage and updating state (useful when page refreshes)
  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if (movie || slot || seats) {
      changeTime(slot);
      changeMovie(movie);
      changeNoOfSeats(seats);
    }
  }, []);

  return (
    // Providing all required data to the app
    <DatabaseContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}
    >
      {props.children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseState;
