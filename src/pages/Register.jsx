import React from "react";
import { Eye, Facebook, Twitter } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const naviagte = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChange = (e) => {
    setForm((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:8000/auth/register",
        form
      );

      if (response.status === 200) {
        toast.success("Registration successful!");
        naviagte("/login");
      }
    } catch (err) {
      const errMessage = err.response?.data?.error || err.message;
      console.log(errMessage);
      toast.error(errMessage);
    }
  };

  return (
    <div>
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
            <form className="space-y-4" onSubmit={hdlSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email メールアドレス"
                  name="email"
                  value={form.email}
                  onChange={hdlChange}
                  className="w-full p-2 border border-gray-300 rounded-md font-noto-sans-jp"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password パスワード"
                  name="password"
                  value={form.password}
                  onChange={hdlChange}
                  className="w-full p-2 border border-gray-300 rounded-md font-noto-sans-jp"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={hdlChange}
                  placeholder="Confirm Password パスワード確認"
                  className="w-full p-2 border border-gray-300 rounded-md font-noto-sans-jp"
                />
              </div>
              <div className="flex items-center justify-between">
                <div></div>
                <button className="bg-[#F3747F] text-white px-4 py-2 rounded-md font-kanit">
                  Register | <span className="font-noto-sans-jp">登録</span>
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
      <p className="text-4xl font-bold mb-10 font-noto-sans-jp text-center">
        “「唯一実現不可能な旅は、いつまでも始まらないものだ」”
        <br />
        <br />
        <span className="text-2xl">アンソニー・ロビンズ</span>
      </p>
    </div>
  );
}

export default Register;
