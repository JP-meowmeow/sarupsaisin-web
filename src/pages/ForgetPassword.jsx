import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
const URL = import.meta.env.VITE_API_URL;


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // await axios.post("http://localhost:8000/auth/forgot-password", { email });
      await axios.post(`${URL}/auth/forgot-password`, { email });
      toast.success("Password reset email sent! Please check your inbox.");
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <div className="pt-16 mt-24 mb-24 border shadow-lg w-1/2 m-auto rounded-[64px] p-20 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden ">
          <div>
            <div className="flex justify-center items-center">
              <div className="w-1/2 p-8 bg-white">
                <h2 className="text-2xl font-bold mb-4 font-kanit ">
                  Welcome to{" "}
                  <span className="text-[#F3747F]">สรุปสายศิลป์</span> <br />
                  <span className="font-noto-sans-jp text-2xl text-[#F3747F]">
                    サルプサイシンへようこそ！
                  </span>
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="please enter your email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-l bg-[#F3747F] text-white w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Reset Password"}
                  </button>
                </form>
              </div>
              <div className="w-1/2">
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

export default ForgotPassword;
