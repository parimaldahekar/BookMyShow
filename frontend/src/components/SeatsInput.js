import React, { useState, useEffect } from "react";
import "./styles/seatsInput.css";

const SeatsInput = ({
  changeNoOfSeats, // function to change the number of seats
  noOfSeat, // object containing the number of seats
  changeSeats, // function to change the selected seats
  seat, // currently selected seat
  text, // text label for the seat
  index, // index of the seat
}) => {
  // Use state to manage the input value
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Update the input value whenever noOfSeat[text] changes
    setInputValue(noOfSeat?.[text] || "");
  }, [noOfSeat?.[text], noOfSeat, text]);

  // This function handles the change in seat input and updates the state and local storage
  const changeSeatsHandler = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    // Update the noOfSeat object with the new seat value
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(newValue) });
    // Store the updated noOfSeat object in local storage
    window.localStorage.setItem(
      "seats",
      JSON.stringify({ ...noOfSeat, [e.target.name]: Number(newValue) })
    );
  };

  // This function helps in the selection of seats
  const handleChecked = () => {
    changeSeats(text);
  };

  return (
    <div
      name={text}
      // Set the class name based on whether the seat is selected or not
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={handleChecked}
    >
      <span className={"text"}>{text}</span>
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={changeSeatsHandler}
        value={inputValue}
      />
    </div>
  );
};

export default SeatsInput;
