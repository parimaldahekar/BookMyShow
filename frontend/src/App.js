import React from "react";
import DatabaseState from "./context/DatabaseState";
import Home from "./pages/Home";

function App() {
  return (
    // Wrap the Home component with the DatabaseState context provider
    <>
      <DatabaseState>
        <Home/>
      </DatabaseState>
    </>
  );
}

export default App;
