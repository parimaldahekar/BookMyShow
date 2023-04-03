import React, { useContext, useEffect } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../data/Data";
import DatabaseContext from "../context/DatabaseContext";
import "./styles/SelectMovie.css";

const SelectMovie = () => {
  // Get the movie and changeMovie functions from the context
  const context = useContext(DatabaseContext);
  const { movie, changeMovie } = context;

  // Use useEffect hook to get the selected movie from local storage and update the context if it's different than the current movie state
  useEffect(() => {
    const selectedMovie = window.localStorage.getItem("movie");

    if (selectedMovie && selectedMovie !== movie) {
      changeMovie(selectedMovie);
    }
  }, [changeMovie, movie]);

  // Handle the change of selected movie and update it in the context and local storage
  const handleChangeMovie = (value) => {
    changeMovie(value);
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <div className="SM_main_container">
        {/* Display the heading */}
        <h1 className="SM_heading">Select a Movie :-</h1>
        {/* Display the radio buttons for all movies in the list */}
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;
