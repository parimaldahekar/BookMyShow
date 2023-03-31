import React, { useContext, useCallback } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../data/Data";
import "./styles/TimeSchedule.css";
import DatabaseContext from "../context/DatabaseContext";

const TimeSchedule = () => {
  const context = useContext(DatabaseContext);

  const { time, changeTime } = context;

  const handleChangeTime = useCallback((value) => {
    // The useCallback hook is used to memoize this function so that it is only created once and not recreated on every re-render of the component.
    // This function is used to handle the change of selected time slot
    changeTime(value);

    // Store the selected time slot in local storage
    window.localStorage.setItem("slot", value);
  }, [changeTime]);

  return (
    <>
      {/* Time schedule container */}
      <div className="Slot_container">
        {/* Heading */}
        <h1 className="TS_heading">Select a Time Slot :-</h1>

        {/* Main container to display time slots */}
        <div className="TS_main_container">
          {slots.map((el, index) => {
            // Render the radio component for each time slot
            return (
              <RadioComponent
                text={el}
                changeSelection={handleChangeTime}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeSchedule;
