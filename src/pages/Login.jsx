import React from "react";
import { Eye, Facebook, Twitter } from "lucide-react";

const Login = () => {
  return (
    <div className="pt-16 mt-24 mb-24 border shadow-lg w-1/2 m-auto rounded-[64px] p-20 ">
      <div className="flex justify-center items-center">
        <div className="w-1/2 p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 font-kanit ">
                Welcome to <span className="text-[#F3747F]">สรุปสายศิลป์</span> {" "}
                <br />
                <span className="font-noto-sans-jp text-2xl text-[#F3747F]">サルプサイシンへようこそ！</span>
              </h2>
          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Email メールアドレス"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password パスワード"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <Eye className="absolute right-2 top-2 text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button className="bg-[#F3747F] text-white px-4 py-2 rounded-md">
                LOGIN
              </button>
            </div>
            <div className="text-sm text-[#F3747F]">
              <a href="#">Register 登録</a>
              <span className="mx-2 text-gray-300">|</span>
              <a href="#">Forgot password? 忘れちゃった？ </a>
            </div>
          </form>
          <div className="mt-6 space-y-2">
            <button className="w-full p-2 bg-blue-600 text-white rounded-md flex items-center justify-center">
              <Facebook className="mr-2" size={20} />
              LOGIN WITH FACEBOOK
            </button>
            <button className="w-full p-2 bg-red-500 text-white rounded-md flex items-center justify-center">
              <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z"
                />
              </svg>
              LOGIN WITH GOOGLE
            </button>
          </div>
        </div>
        <div className="w-1/2">
          {/* This is where you'd put the image */}
          <div className="h-full flex items-center justify-center">
            <img
              src="/src/images/logo black.png"
              alt="Login background"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
