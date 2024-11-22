import React from "react";
import Tiktok from "../components/Tiktok";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

function Home() {
  const token = useAuthStore((state) => state.token);
  return (
    // Added overflow-x-hidden to prevent horizontal scroll
    <div className="flex flex-col min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      {/* Adjusted padding for better mobile response */}
      <div className="pt-16 px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 ">
          <main className="col-start-1 row-start-1 w-full max-w-7xl mx-auto py-4 sm:py-8">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Video Section */}
              <div className="w-full md:w-1/2 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/XnPOEGJcy3w?si=mV99p1tkPjtMWqTY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text Section */}
              <div
                className="w-full md:w-1/2 md:pl-4 lg:pl-8 flex flex-col mb-4 justify-center 
              bg-[url('https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566776/logo_pink_z8sarx.png')]
               bg-contain bg-right bg-no-repeat "
              >
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 font-kanit">
                  เรียนภาษาญี่ปุ่นกับ sarupsaisin
                </h1>
                <p className="mb-2 sm:mb-4 font-kanit text-sm sm:text-base">
                  สื่อการเรียนรู้ภาษาญี่ปุ่นของคนรุ่นใหม่
                </p>
                <div className="flex space-x-2 sm:space-x-4">
                  {token ? (
                    <div></div>
                  ) : (
                    <Link
                      to="/login"
                      className="btn btn-sm bg-[#F3747F] text-white px-2 sm:px-4 py-1 sm:py-2 sm:pb-8 rounded font-kanit text-sm sm:text-base"
                    >
                      เข้าสู่ระบบ
                    </Link>
                  )}
                  <Link
                    to="/course/3"
                    className="btn btn-sm bg-[#F3747F] text-white px-2 sm:px-4 py-1 sm:py-2 sm:pb-8 rounded font-kanit text-sm sm:text-base"
                  >
                    ทดลองเรียน
                  </Link>
                </div>
              </div>
            </div>
          </main>

          {/* Logo Position */}
          {/* <div className="col-start-1 row-start-1 justify-self-end mt-6 sm:mt-12 mr-2 sm:mr-8 lg:mr-16">
            <img
              src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566776/logo_pink_z8sarx.png"
              alt=""
              className="w-[120px] sm:w-[200px] lg:w-[400px]"
            />
          </div> */}
        </div>

        {/* Main Content Area */}
        <div className="w-full max-w-7xl mx-auto -mt-5 ">
          {/* Course Section */}
          <div className="mb-4 sm:mb-8 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 font-kanit">
              คอร์สเรียนภาษาญี่ปุ่น{" "}
              <span className="font-noto-sans-jp text-xl sm:text-2xl">
                コース
              </span>
            </h2>
            <div className="divider -mt-2"></div>

            {/* Course Images */}
            <div className="grid grid-cols-3 gap-2 lg:gap-4">
              {/* {["N3", "N4", "N5"].map((level, index) => (
                <img
                  key={index}
                  src={`./src/images/course/JLPT ${level}.png`}
                  alt=""
                  className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] aspect-square rounded-3xl shadow-2xl"
                />
              ))} */}
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566241/JLPT_N5_nmjstu.png"
                className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] aspect-square rounded-3xl shadow-2xl"
              />
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N3_vvfhml.png"
                className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] aspect-square rounded-3xl shadow-2xl"
              />
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566234/JLPT_N4_odl9wh.png"
                className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] aspect-square rounded-3xl shadow-2xl"
              />
            </div>

            <div className="flex justify-center mt-4 sm:mt-8">
              <Link
                to="/course"
                className="btn btn-sm sm:btn-md text-[12px]  w-full  sm:w-3/4 lg:w-1/2 bg-[#F3747F] font-kanit text-white tracking-widest sm:text-lg"
              >
                all course คอร์สเรียนทั้งหมด
              </Link>
            </div>
          </div>

          {/* Articles Section */}
          <div className="mb-4 sm:mb-8 ">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 font-kanit text-center lg:text-left">
              บทความที่น่าสนใจ{" "}
              <span className="font-noto-sans-jp text-xl sm:text-2xl">
                記事
              </span>
            </h2>
            <div className="divider -mt-2"></div>

            {/* Article Images */}
            <div className="grid grid-cols-3 gap-2 lg:gap-4">
              {/* {[2, 1, 3].map((num, index) => (
                <img
                  key={index}
                  src={`./src/images/articles/Article ${num}.png`}
                  alt=""
                  className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] aspect-square rounded-3xl shadow-2xl"
                />
              ))} */}

              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566187/Article_1_kmmg4j.png"
                className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] aspect-square rounded-3xl shadow-2xl"
              />
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566178/Article_2_dt8a4t.png"
                className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] aspect-square rounded-3xl shadow-2xl"
              />
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566178/Article_3_ch85fk.png"
                className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] aspect-square rounded-3xl shadow-2xl"
              />
            </div>

            <div className="flex justify-center mt-4 sm:mt-8">
              <Link
                to="/article"
                className="btn btn-sm sm:btn-md text-[12px] w-full sm:w-3/4 lg:w-1/2 bg-[#F3747F] font-kanit text-white tracking-widest  sm:text-lg"
              >
                all article บทความที่น่าสนใจทั้งหมด
              </Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 font-kanit text-center lg:text-left">
              Social Media{" "}
              <span className="font-noto-sans-jp text-xl sm:text-2xl">
                ソーシャル
              </span>
            </h2>
            <div className="divider -mt-2"></div>
            <div className="mb-16">
              <Tiktok />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
