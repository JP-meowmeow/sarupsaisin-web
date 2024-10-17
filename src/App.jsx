import React from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import AppRouter from "../routes/AppRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
