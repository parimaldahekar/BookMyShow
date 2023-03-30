import React from "react";
import "./styles/radioComponent.css";

const RadioComponent = ({ text, changeSelection, data }) => {
  // Function to handle radio button selection
  const handleChecked = () => {
    changeSelection(text); // Pass the selected value to the changeSelection function
  };

  return (
    <div
      name={text}
      // Apply the 'active' class if the radio button is selected (i.e., data is equal to the text)
      className={`form-check-label ${data === text ? "active" : "inactive"}`}
      onClick={handleChecked}
    >
      <span className="text">{text}</span>
    </div>
  );
};

export default RadioComponent;
