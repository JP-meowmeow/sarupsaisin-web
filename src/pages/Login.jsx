import React, { useState } from "react";
import { Facebook } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const hdlChange = (e) => {
    setForm((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await login(form);
      if (response.status === 200) {
        setForm({
          email: "",
          password: "",
        });
        console.log(response.data);
        navigate("/userinfo");
        toast.success("Login successful!");
      }
    } catch (err) {
      const errMessage = err.response?.data?.error || err.message;
      console.log(errMessage);
      toast.error(errMessage);
    }
  };

  return (
    <div className="mt-24 mb-24 md:mt-24 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 md:mb-16 border shadow-lg w-full md:w-[90%] lg:w-[80%] xl:w-[70%] m-auto rounded-3xl md:rounded-[64px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* responsive logo */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:hidden">
              <div className="h-full flex items-center justify-center">
                <img
                  src="/src/images/logo black.png"
                  alt="Login background"
                  className="object-contain max-w-[80%] lg:max-w-full"
                />
              </div>
            </div>
            {/* Form Section */}
            <div className="w-full lg:w-1/2 p-4 md:p-8 bg-white">
              <h2 className="text-xl md:text-2xl font-bold mb-4 font-kanit  text-center lg:text-left">
                Welcome to <span className="text-[#F3747F]">สรุปสายศิลป์</span>{" "}
                <br />
                <span className="font-noto-sans-jp text-2xl md:text-2xl text-[#F3747F]">
                  サルプサイシンへようこそ！
                </span>
              </h2>
              <form className="space-y-4" onSubmit={hdlSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={hdlChange}
                    placeholder="Email メールアドレス"
                    className="w-full p-2 border border-gray-300 rounded-md font-noto-sans-jp"
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={hdlChange}
                    placeholder="Password パスワード"
                    className="w-full p-2 border border-gray-300 rounded-md font-noto-sans-jp"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div></div>
                  <button className="btn btn-sm md:btn-l bg-[#F3747F] text-white px-4 rounded-md w-full">
                 Login | <span className="font-noto-sans-jp">ログイン</span>
                  </button>
                </div>
                <div className="text-sm text-[#F3747F] flex justify-center items-center gap-2 sm:gap-0">
                  <Link to="/register">Register 登録</Link>
                  <span className="mx-2 text-gray-300">|</span>
                  <Link to="/forgot-password">Forgot password? 忘れちゃった？</Link>
                </div>
              </form>
              <div className="mt-3 space-y-2">
                <button className="w-full p-2 bg-blue-600 text-white rounded-md flex items-center justify-center text-sm sm:text-base">
                  <Facebook className="mr-2" size={20} />
                  LOGIN WITH FACEBOOK
                </button>
                <button className="w-full p-2 bg-red-500 text-white rounded-md flex items-center justify-center text-sm sm:text-base">
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

            {/* Image Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 hidden lg:block">
              <div className="h-full flex items-center justify-center">
                <img
                  src="/src/images/logo black.png"
                  alt="Login background"
                  className="object-contain max-w-[80%] lg:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="px-4 sm:px-0">
        <p className="text-2xl lg:text-4xl font-bold mb-6 md:mb-10 font-noto-sans-jp text-center">
          "「唯一実現不可能な旅は、いつまでも始まらないものだ」"
          <br />
          <span className="text-xl ">アンソニー・ロビンズ</span>
        </p>
      </div>
    </div>
  );
};

export default Login;