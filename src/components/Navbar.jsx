import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

// #FCFBF8 สีเหลืองอ่อน

function Navbar() {
  const { user, token, logout } = useAuthStore();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="h-16 w-full fixed p-2 top-0 z-10 px-3 flex justify-around shadow-lg bg-[#F8DFDF] font-kanit ">
      <div className="flex gap-20">
        <Link to="/">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1728973591/logo_sevw72.png"
              alt="sarupsaisin logo"
              className="w-[100px] h-[100px] cursor-pointer -mt-7"
            />
          </div>
        </Link>
        <Link to="/about">
          <div className="text-center cursor-pointer">
            <p>รู้จักกันหน่อย</p>
            <p className="font-noto-sans-jp text-lg">自己紹介</p>
          </div>
        </Link>

        <Link to="/test">
          <div className="text-center cursor-pointer">
            <p>หนังสือเรียน/ข้อสอบเก่า</p>
            <p className="font-noto-sans-jp text-lg">本・テスト</p>
          </div>
        </Link>
        <Link to="/course">
          <div className="text-center cursor-pointer">
            <p> คอร์สเรียน</p>
            <p className="font-noto-sans-jp text-lg"> コース</p>
          </div>
        </Link>
        <Link to="/article">
          <div className="text-center cursor-pointer">
            <p>บทความที่น่าสนใจ</p>
            <p className="font-noto-sans-jp text-lg"> 記事</p>
          </div>
        </Link>

        <div className="mt-0">
          <div className="flex gap-10 ">
            {/* Login and Logout button  */}
            {token ? (
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 w-60">
                  {user}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                >
                  <li>
                    <p>
                      {" "}
                      <Link to='/userinfo' className="btn btn-sm h-12 w-60 bg-[#F3747F]">
                        Dashboard
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to='/'
                        onClick={handleLogout}
                        className="btn btn-sm h-12 w-60 bg-[#F3747F]"
                      >
                        Logout
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-10 ">
                <Link to="/login"  >
                  <button className="btn btn-sm h-12 w-32 bg-[#F3747F] ">
                    <div className="flex flex-col gap-2">
                      <p>Log-in</p>
                      <p className="font-noto-sans-jp text-[16px]">ログイン</p>
                    </div>
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-sm h-12 w-32 bg-[#F3747F]">
                    <div className="flex flex-col gap-2">
                      <p>Sign-up</p>
                      <p className="font-noto-sans-jp text-[16px]">
                        サインアップ
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
