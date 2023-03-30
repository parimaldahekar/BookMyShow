import React from "react";
import BsState from "./context/DatabaseState";
import Home from "./pages/Home";

function App() {
  return (
    // Wrap the Home component with the BsState context provider
    <>
      <BsState>
        <Home />
      </BsState>
    </>
  );
}

export default App;
