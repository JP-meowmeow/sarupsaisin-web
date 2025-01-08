import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    // dateOfBirth: "",
  });

  const hdlChange = (e) => {
    setForm((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        // "http://localhost:8000/auth/register",
        `${process.env.VITE_API_URL}/auth/register`,
        form
      );

      if (response.status === 200) {
        toast.success("Registration successful!");
        // console.log(response)
        navigate("/login");
      }
    } catch (err) {
      const errMessage = err.response?.data?.error || err.message;
      console.log(errMessage);
      toast.error(errMessage);
    }
  };

  return (
    <div className="font-kanit mt-24 mb-24 md:mt-24 lg:mt-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div className="mb-8 md:mb-16 border shadow-lg w-full md:w-[90%] lg:w-[80%] xl:w-[70%] m-auto rounded-3xl md:rounded-[64px] px-4 sm:px-8 md:px-12 lg:px-16">
        {/* <div className="pt-16 mt-24 mb-24 border shadow-lg w-1/2 m-auto rounded-[64px] p-20"> */}
        <div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* logo when using mobile */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:hidden">
              <div className="h-full flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729569335/1729569332469.png"
                  alt="Login background"
                  className="object-contain max-w-[80%] lg:max-w-full"
                />
              </div>
            </div>

              {/* Form Section */}
            <div className="w-full lg:w-1/2 p-4 md:p-8 ">
              <h2 className="text-xl md:text-2xl font-bold mb-4 font-kanit  text-center lg:text-left ">
                Welcome to <span className="text-[#F3747F]">สรุปสายศิลป์</span>{" "}
                <br />
                <span className="font-noto-sans-jp text-2xl md:text-2xl text-[#F3747F]">
                  サルプサイシンへようこそ！
                </span>
              </h2>

              <form className="space-y-4" onSubmit={hdlSubmit}>
                {/* <div className="">
                  <label>Date of Birth :</label>
                  <input
                    type="date"
                    placeholder="วันเกิด"
                    name="dateOfBirth"
                    value={form.dateOfBirth}
                    onChange={hdlChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-noto-sans-jp"
                  />
                </div> */}
                <div className="">
                  <label>E-mail :</label>
                  <input
                    type="text"
                    placeholder="Email メールアドレス"
                    name="email"
                    value={form.email}
                    onChange={hdlChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-noto-sans-jp"
                  />
                </div>
                <div className="">
                  <label>Password :</label>
                  <input
                    type="password"
                    placeholder="Password パスワード"
                    name="password"
                    value={form.password}
                    onChange={hdlChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-noto-sans-jp"
                  />
                </div>
                <div className="">
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
                  <button className="btn btn-sm md:btn-l bg-[#F3747F] text-white px-4 rounded-md w-full">
                    Register | <span className="font-noto-sans-jp">登録</span>
                  </button>
                </div>
              </form>
            </div>
            {/* logo display */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 hidden lg:block">
              <div className="h-full flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729569335/1729569332469.png"
                  alt="Register background"
                  className="object-contain max-w-[80%] lg:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-0">
        <p className="text-2xl lg:text-4xl font-bold mb-6 md:mb-10 font-noto-sans-jp text-center">
          "「唯一実現不可能な旅は、いつまでも始まらないものだ」"
          <br />
          <span className="text-xl">アンソニー・ロビンズ</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
