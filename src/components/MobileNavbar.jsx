import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, User, Newspaper } from 'lucide-react';
import useAuthStore from "../../store/authStore";

export default function MobileNavbar() {

  const { user, token, logout, role } = useAuthStore();

  return (
    <nav className="bg-[#F8DFDF] font-kanit text-black shadow-lg py-2 px-4">
      <ul className="flex justify-around items-center">
        <li>
          <Link to="/" className="flex flex-col items-center gap-1">
            <Home size={24} />
            <span className="text-xs">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/book" className="flex flex-col items-center gap-1">
            <Book size={24} />
            <span className="text-xs">Test</span>
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
            <Newspaper size={24} />
            <span className="text-xs">Article</span>
          </Link>
          
        </li>
        <li>
        {token 
        ?<Link to="/userinfo" className="flex flex-col items-center gap-1">
        <User size={24} />
        <span className="text-xs">Profile</span>
      </Link>
        :<Link to="/login" className="flex flex-col items-center gap-1">
        <User size={24} />
        <span className="text-xs">Login</span>
      </Link>
        }
        
        </li>
      </ul>
    </nav>
  )
}
