import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";

export default function Layout() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50 hidden lg:block">
        <Navbar />
      </div>
<div className="fixed top-0 left-0 right-0 z-10 block lg:hidden">

        <Footer/>
</div>
      <Outlet />
      <div className="fixed bottom-0 left-0 right-0  bg-white border-t shadow-lg z-50 lg:hidden">
        <MobileNavbar />
      </div>
      <div className="fixed bottom-0 left-0 right-0  bg-white border-t shadow-lg z-40 hidden lg:block">
      {/* <div className="  bg-white border-t shadow-lg z-40 hidden lg:block"> */}
        <Footer />
      </div>
    </div>
  );
}
