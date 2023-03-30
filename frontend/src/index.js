import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Get the root element from the HTML document
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
