import LastBookingDetails from "../components/LastBookingDetails";
import SelectMovie from "../components/SelectMovie";
import SelectSeats from "../components/SelectSeats";
import TimeSchedule from "../components/TimeSchedule";
import Modal from "../components/Modal";
import "./Home.css";
import BsContext from "../context/DatabaseContext";
import { useContext, useMemo } from "react";


const Home = (props) => {
  // Get context from the BsContext provider
  const context = useContext(BsContext);
  // Destructure values from context
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
    changeNoOfSeats,
  } = context;

  // Memoize a function to check if there are negative seats
  const checkNegSeats = useMemo(() => {
    return (seats) => {
      for (let seat in seats) {
        if (Number(seats[seat]) < 0) {
          return true;
        }
      }
      return false;
    };
  }, []);

  // Memoize a function to check if there are zero seats
  const checkZeroSeats = useMemo(() => {
    return (seats) => {
      for (let seat in seats) {
        if (Number(seats[seat]) > 0) {
          return false;
        }
      }
      return true;
    };
  }, []);

  // Handle booking when the "Book Now" button is clicked
  const handleBookNow = () => {
    switch (true) {
      // Display an error popup if no movie is selected
      case !movie:
        setErrorPopup(true);
        setErrorMessage("Please select a movie!");
        break;
      // Display an error popup if no time slot is selected
      case !time:
        setErrorPopup(true);
        setErrorMessage("Please select a time slot!");
        break;
      // Display an error popup if there are negative or zero seats
      case checkNegSeats(noOfSeat) ||
        checkZeroSeats(noOfSeat):
        setErrorPopup(true);
        setErrorMessage("Please select a seats!");
        break;
      // Post the booking and reset the selected seats
      default:
        handlePostBooking();
        changeNoOfSeats({});
    }
  };

  // Render the Home component
  return (
    <>
      {/*Render the Modal component */}
      <Modal />
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div className="select_movie_component">
              {/* Render the SelectMovie component */}
              <SelectMovie />
            </div>
            <div className="last_booking_details_container">
              {/* Render the LastBookingDetails component*/}
              <LastBookingDetails /> 
            </div>
          </div>
          <div className="time_seats_container">
            {/* Render the TimeSchedule component */}
            <TimeSchedule />
            {/*Render the SelectSeats component */}
            <SelectSeats />
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
