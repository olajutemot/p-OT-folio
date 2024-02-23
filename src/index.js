import React from "react";
import ReactDOM from "react-dom/client";
import Hompage from "./app/components/Hompage";
// import Portfolio from "./Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Portfolio /> */}
    <Hompage />
  </React.StrictMode>
);
