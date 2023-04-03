import React, { useContext } from "react";
import DatabaseContext from "../context/DatabaseContext";
import "./styles/Modal.css";



function Modal() {
  const { errorPopup, errorMessage, setErrorPopup, setErrorMessage } =
    useContext(DatabaseContext);

  const handleClosePopup = () => {
    setErrorMessage("");
    setErrorPopup(false);
  };

  return (
    <>
      {errorPopup && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Message</h2>
            </div>
            <div className="modal-body">
              <p>{errorMessage}</p>
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

