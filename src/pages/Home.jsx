import React from "react";
import Tiktok from "../components/Tiktok";
function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-[#FCFBF8]">
        <div className="pt-16">
          <div className="grid grid-cols-1">
            <main className="col-start-1 row-start-1 flex-grow container mx-auto px-4 py-8 pt-16 relative ">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 aspect-video flex items-center justify-center text-white text-2xl mb-4 md:mb-0">
                <iframe
                  width="1400"
                  height="500"
                  src="https://www.youtube.com/embed/XnPOEGJcy3w?si=mV99p1tkPjtMWqTY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 font-kanit ">
                  เรียนภาษาญี่ปุ่นกับ sarupsaisin
                </h1>
                <p className="mb-4 font-kanit">
                  สื่อการเรียนรู้ภาษาญี่ปุ่นของคนรุ่นใหม่
                </p>
                <div className="flex space-x-4">
                  <button className="bg-[#F3747F] text-white px-4 py-2 rounded font-kanit ">
                    เข้าสู่ระบบ
                  </button>
                  <button className="bg-[#F3747F] text-white px-4 py-2 rounded font-kanit">
                    ทดลองเรียน
                  </button>
                </div>
              </div>
            </div>
            </main>
            <div className="col-start-1 row-start-1 justify-self-end mt-12 mr-24">
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566776/logo_pink_z8sarx.png"
                alt=""
                className="w-[600px]"
              />
            </div>
          </div>
          <main className="flex-grow container mx-auto px-4 -my-10">
           

            {/* Course Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-kanit ">
                คอร์สเรียนภาษาญี่ปุ่น{" "}
                <span className="font-noto-sans-jp text-2xl">コース</span>
              </h2>
              <div className="divider"></div>
              <div className="flex justify-between px-5">
                <img
                  src="./src/images/course/JLPT N3.png"
                  alt=""
                  className="aspect-square w-[400px] rounded-3xl shadow-2xl"
                />
                <img
                  src="./src/images/course/JLPT N4.png"
                  alt=""
                  className="aspect-square w-[400px] rounded-3xl shadow-2xl"
                />
                <img
                  src="./src/images/course/JLPT N5.png"
                  alt=""
                  className="aspect-square w-[400px] rounded-3xl shadow-2xl"
                />
              </div>
              <div className="flex  justify-center">
                <button className="btn w-3/4  bg-[#F3747F] font-kanit text-white mt-10 tracking-widest text-lg">
                  {" "}
                  all course คอร์สเรียนทั้งหมด{" "}
                </button>
              </div>
            </div>

            {/* Popular Article Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-kanit ">
                บทความที่น่าสนใจ{" "}
                <span className="font-noto-sans-jp text-2xl">記事</span>
              </h2>
              <div className="divider"></div>
              <div className="flex justify-between px-5">
                <img
                  src="./src/images/articles/Article 2.png"
                  alt=""
                  className="aspect-square w-[400px] rounded-3xl shadow-2xl"
                />
                <img
                  src="./src/images/articles/Article 1.png"
                  alt=""
                  className="aspect-square w-[400px] rounded-3xl shadow-2xl"
                />
                <img
                  src="./src/images/articles/Article 3.png"
                  alt=""
                  className="aspect-square w-[400px] rounded-3xl shadow-2xl"
                />
              </div>
              <div className="flex  justify-center">
                <button className="btn w-3/4  bg-[#F3747F] font-kanit text-white mt-10 tracking-widest text-lg">
                  {" "}
                  all article บทความที่น่าสนใจทั้งหมด{" "}
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-kanit ">
                Social Media{" "}
                <span className="font-noto-sans-jp text-2xl">ソーシャル</span>
              </h2>
              <div className="divider"></div>
              <Tiktok />
            </div>
          </main>

          {/* Footer */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
