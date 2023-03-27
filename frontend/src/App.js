import React from "react";
import BsState from "./context/State";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BsState>
        <Home />
      </BsState>
    </>
  );
}

export default App;
