import React from "react";
import AppRouter from "../routes/AppRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="">
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
