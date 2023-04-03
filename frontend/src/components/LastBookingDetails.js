import React, { useEffect } from "react";
import "./styles/lastbookingdetails.css";
import { useContext } from "react";
import DatabaseContext from "../context/DatabaseContext";
import { seats } from "../data/Data";

const LastBookingDetails = () => {
  const { handleGetLastBooking, lastBookingDetails } = useContext(DatabaseContext);

  useEffect(() => {
    // Fetch the details of the last booking when the component mounts
    handleGetLastBooking();
  }, [handleGetLastBooking]); // Add the dependency array to prevent infinite loops

  return (
    <div className="last-booking-details-container">
      <h3 className="last-booking-details-header">Last Booking Details:</h3>
      {lastBookingDetails ? (
        // Below code shows the last booking details if it is available
        <>
          <div className="seats-container">
            <p className="seats-header">Seats:</p>
            <ul className="seats-list">
              {seats.map((seat) => (
                // Only show the seat if its quantity is greater than 1
                lastBookingDetails.seats[seat] >= 1 && (
                  <div className="" key={seat}>           
                      {seat}: {lastBookingDetails.seats[seat]}
                  </div>
                )
              ))}
            </ul>
          </div>
          <p className="slot">
            {/* Below code shows the time slot of booking */}
            Slot:- <span>{lastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            {/* Below code shows the name of last booked movie */}
            Movie:- <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        // Display a message if there are no previous bookings
        <p className="no-previous-booking-msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
