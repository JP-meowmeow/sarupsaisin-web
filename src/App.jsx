import React from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import AppRouter from "../routes/AppRouter";

function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
