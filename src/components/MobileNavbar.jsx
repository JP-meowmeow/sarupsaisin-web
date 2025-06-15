import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Book, User, Newspaper } from "lucide-react";
import useAuthStore from "../../store/authStore";

export default function MobileNavbar() {
  const { user, token, logout, role } = useAuthStore();
  const location = useLocation();
  const pathname = location.pathname

  return (
    <nav className="bg-[#F8DFDF] font-kanit text-black shadow-lg py-2 px-4">
      <ul className="flex justify-around items-center">
        <li>
          <Link to="/" className="flex flex-col items-center gap-1">
            <Home size={24}  color={location.pathname === "/" ? '#F3747F':"black"}/>
            <span className={`text-xs text-center cursor-pointer ${location.pathname === "/" ? "text-[#F3747F] font-bold " : ""}`}>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/jlpttest" className="flex flex-col items-center gap-1">
            <Book size={24} color={pathname.startsWith("/jlpt") ? '#F3747F':"black"}/>
            <span className={`text-xs text-center cursor-pointer ${pathname.startsWith("/jlpt")? "text-[#F3747F] font-bold " : ""}`}>Test</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/course" className="flex flex-col items-center gap-1">
            <Book size={24} />
            <span className="text-xs">Courses</span>
          </Link>
        </li> */}
        <li>
          <Link to="/article" className="flex flex-col items-center gap-1">
            <Newspaper size={24} color={ pathname.startsWith("/article") ? '#F3747F':"black"}/>
            <span className={`text-xs text-center cursor-pointer ${pathname.startsWith("/article") ? "text-[#F3747F] font-bold " : ""}`}>Article</span>
          </Link>
        </li>
        <li>
          {token ? (
            <Link to="/userinfo" className="flex flex-col items-center gap-1">
              <User size={24} color={pathname.startsWith("/userinfo") ? '#F3747F':"black"} />
              <span className={`text-xs text-center cursor-pointer ${pathname.startsWith("/userinfo") ? "text-[#F3747F] font-bold " : ""}`}>Profile</span>
            </Link>
          ) : (
            <Link to="/login" className="flex flex-col items-center gap-1">
              <User size={24} color={pathname.startsWith("/login") ? '#F3747F':"black"} />
              <span className={`text-xs text-center cursor-pointer ${pathname.startsWith("/login") ? "text-[#F3747F] font-bold " : ""}`}>Login</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
