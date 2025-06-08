import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

// #FCFBF8 สีเหลืองอ่อน

function Navbar() {
  const { user, token, logout, role } = useAuthStore();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="text-[10px] md:text-[12px] lg:text-[16px] h-16 w-full fixed p-2 top-0 z-10 px-3 flex justify-around shadow-lg bg-[#F8DFDF] font-kanit ">
      <div className="flex gap-5 md:gap-10 ">
     
        <div className="hidden sm:flex gap-5 md:gap-10 lg:gap-20">
          <Link to="/">
            <div className="logo ">
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1728973591/logo_sevw72.png"
                alt="sarupsaisin logo"
                className="w-[100px] h-[100px] cursor-pointer -mt-7"
              />
            </div>
          </Link>
          
          <Link to="/about">
            <div className=" text-center cursor-pointer text-  ">
              <p>รู้จักกันสักหน่อย</p>
              <p className="font-noto-sans-jp text-lg ">自己紹介</p>
            </div>
          </Link>

          <Link to="/book">
            <div className="text-center  ">
              <p>หนังสือเรียน/ข้อสอบเก่า</p>
              <p className="font-noto-sans-jp text-lg">本・テスト</p>
            </div>
          </Link>

          <div>
            {/* <Link to="/course"> */}
            <div className="text-center line-through">
              <p> คอร์สเรียน</p>
              <p className="font-noto-sans-jp text-lg"> コース</p>
            </div>
          </div>

          <div to="#">
            {/* ปิดไว้ก่อนรอข้อสอบเสร็จ */}
            {/* <Link to="/jlpt"> */}
            <div className="text-center text-center line-through">
              <p>ฝึกทำข้อสอบ JLPT</p>
              <p className="font-noto-sans-jp text-lg"> 日本語能力試験</p>
            </div>
          </div>
          <Link to="/article">
            <div className="text-center cursor-pointer ">
              <p>บทความที่น่าสนใจ</p>
              <p className="font-noto-sans-jp text-lg"> 記事</p>
            </div>
          </Link>
        </div>
        <div className="mt-0 ">
          <div className="flex gap-10 ">
            {/* Login and Logout button  */}
            {token ? (
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 w-32 md:w-60  "
                >
                  {user}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                >
                  <li className="p-2">
                    {" "}
                    <Link
                      to="/userinfo"
                      className="btn btn-sm h-12 w-60  bg-[#F3747F]"
                    >
                      Dashboard
                    </Link>
                  </li>

                  {role === "ADMIN" && (
                    <li className="p-2">
                      <Link
                        to="/admin/userdata"
                        className="btn btn-sm h-12 w-60 bg-[#F3747F]"
                      >
                        Check slip
                      </Link>
                    </li>
                  )}

                  <li className="p-2">
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="btn btn-sm h-12 w-60 bg-[#F3747F]"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-10 ">
                <Link to="/login">
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
