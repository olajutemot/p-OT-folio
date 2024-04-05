import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Home from "./pages";
import App from "./App";
import { AuthProvider } from "./components/AuthContext";
// import Portfolio from "./Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <App />
      {/* <Home /> */}
    </AuthProvider>
  </React.StrictMode>
);
