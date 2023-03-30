import React, { useContext } from "react";
import DatabaseContext from "../context/DatabaseContext";
import "./styles/Modal.css";

function Modal() {
  // Destructure the context object directly for better readability
  const { errorPopup, errorMessage, setErrorPopup, setErrorMessage } =
    useContext(DatabaseContext);

  // Function for closing the error modal
  const handleClosePopup = () => {
    setErrorMessage("");
    setErrorPopup(false);
  };

  // Render the error modal if `errorPopup` is true
  return (
    <>
      {errorPopup && (
        <div className={`modal-container ${errorPopup ? "active" : "inactive"}`}>
          <div className="modal">
            <div className="modal-header">
              <strong>Message</strong>
            </div>
            <div className="modal-body">
              {/* Display the error message */}
              <span>{errorMessage}</span>
            </div>
            <div className="modal-footer">
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
