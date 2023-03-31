import React, { useState, useContext, useEffect } from "react";
import { seats } from "../data/Data";
import "./styles/selectSeats.css";
import DatabaseContext from "../context/DatabaseContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  // State to keep track of selected seats
  const [seat, changeSeats] = useState([]);
  
  // Accessing context
  const context = useContext(DatabaseContext);
  const { noOfSeat, changeNoOfSeats } = context;

  useEffect(() => {
    // Clear selected seats when noOfSeat changes
    changeSeats([]);
  }, [noOfSeat]);

  return (
    <>
      {/* Wrapper */}
      <div className="SS_wrapper">
        {/* Heading */}
        <h1 className="SS_heading">Select the Seats :-</h1>
        {/* Seats container */}
        <div className="SS_main_container">
          {seats.map((e, index) => {
            return (
              <SeatsInput
                seat={seat}
                key={index}
                index={index}
                changeSeats={changeSeats}
                noOfSeat={noOfSeat}
                text={e}
                changeNoOfSeats={changeNoOfSeats}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
