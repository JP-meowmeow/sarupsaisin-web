import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "../../store/authStore";

// #FCFBF8 สีเหลืองอ่อน

function Navbar() {
  const { user, token, logout, role } = useAuthStore();
  const location = useLocation();
  const pathname = location.pathname;
  
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-full fixed top-0 z-10 bg-[#F8DFDF] shadow-md font-kanit">
      <div className="flex  justify-between items-center px-4 py-2 sm:px-6 md:px-10 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1728973591/logo_sevw72.png"
            alt="sarupsaisin logo"
            className="h-12 sm:h-14 md:h-16 w-[80px]"
          />
        </Link>

        {/* Navigation Menu */}
        <div className="hidden lg:flex gap-4 xl:gap-10 items-center text-[12px] md:text-[14px] lg:text-[16px]">
          <Link to="/about">
            <div
              className={`text-center cursor-pointer ${
                location.pathname === "/about"
                  ? "text-[#F3747F] font-bold "
                  : ""
              }`}
            >
              <p>รู้จักกันสักหน่อย</p>
              <p className="font-noto-sans-jp text-sm">自己紹介</p>
            </div>
          </Link>
          <Link to="/book">
            <div
              className={`text-center cursor-pointer ${
                pathname.startsWith("/book") ? "text-[#F3747F] font-bold " : ""
              }`}
            >
              <p>หนังสือเรียน/ข้อสอบเก่า</p>
              <p className="font-noto-sans-jp text-sm">本・テスト</p>
            </div>
          </Link>
          <div
            className={`text-center line-through cursor-pointer ${
              pathname.startsWith("/course") ? "text-[#F3747F] font-bold " : ""
            }`}
          >
            <p>คอร์สเรียน</p>
            <p className="font-noto-sans-jp text-sm">コース</p>
          </div>

          <Link to="/jlpttest">
            <div
              className={`text-center cursor-pointer ${
                pathname.startsWith("/jlpttest")
                  ? "text-[#F3747F] font-bold "
                  : ""
              }`}
            >
              <p>ฝึกทำข้อสอบ JLPT</p>
              <p className="font-noto-sans-jp text-sm">日本語能力試験</p>
            </div>
          </Link>

          <Link to="/article">
            <div
              className={`text-center cursor-pointer ${
                pathname.startsWith("/article")
                  ? "text-[#F3747F] font-bold "
                  : ""
              }`}
            >
              <p>บทความที่น่าสนใจ</p>
              <p className="font-noto-sans-jp text-sm">記事</p>
            </div>
          </Link>
        </div>

        {/* Login/Logout */}
        <div className="mt-2 sm:mt-0">
          {token ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-sm">
                {user}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[1]"
              >
                <li>
                  <Link to="/userinfo" className="btn btn-sm bg-[#F3747F]">
                    Dashboard
                  </Link>
                </li>
                {role === "ADMIN" && (
                  <li>
                    <Link
                      to="/admin/userdata"
                      className="btn btn-sm bg-[#F3747F]"
                    >
                      Check slip
                    </Link>
                  </li>
                )}
                <li>
                  <button onClick={logout} className="btn btn-sm bg-[#F3747F]">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/login">
                <button className="btn btn-md px-10 bg-[#F3747F] border-[#F3747F] text-white">
                  <div>
                    <p>Log-in</p>
                    <p className="font-noto-sans-jp text-sm">ログイン</p>
                  </div>
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-md px-10 bg-[#F3747F] border-[#F3747F] text-white">
                  <div>
                    <p>Sign-up</p>
                    <p className="font-noto-sans-jp text-sm">サインアップ</p>
                  </div>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
