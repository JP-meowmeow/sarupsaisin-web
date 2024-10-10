import React from "react";
import { Eye, Facebook, Twitter } from "lucide-react";

function Register() {
  return (
    <div className="pt-16 mt-24 mb-24 border shadow-lg w-1/2 m-auto rounded-[64px] p-20">
      <div className="flex justify-center items-center">
        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4 font-kanit ">
            Welcome to <span className="text-[#F3747F]">สรุปสายศิลป์</span>{" "}
            <br />
            <span className="font-noto-sans-jp text-2xl text-[#F3747F]">
              サルプサイシンへようこそ！
            </span>
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
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password パスワード確認"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <Eye className="absolute right-2 top-2 text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between">
              <div></div>
              <button className="bg-[#F3747F] text-white px-4 py-2 rounded-md">
                Register | 登録
              </button>
            </div>
          </form>
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
}

export default Register;
