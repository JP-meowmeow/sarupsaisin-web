import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div>
      <main className="pt-24">
        <div className="topside">
          <img
            src="./src/images/banner.png"
            alt=""
            className="w-[800px] m-auto"
          />
        </div>

        <div className="divider m-10 mx-24 flex">
          <h2 className="text-2xl font-bold mb-4 font-kanit m-auto">
            ผู้ก่อตั้ง 
            <span className="font-noto-sans-jp text-2xl"> ファウンダー</span>
          </h2>
        </div>
        <div className="flex justify-around">
        <div className="zom">
        <p className="text-xl font-bold mb-4 font-kanit">P'Zom</p>
          <img src="./src/images/profile/mockup.jpg" alt=""  className="w-[300px] mb-5"/>
          <h2 className="text-xl font-bold mb-4 font-kanit">
          ประวัติการศึกษา<br />
จบการศึกษาจากม.ธรรมศาสตร์ ศิลปศาสตร์ เอกภาษาญี่ปุ่น <br />
นักเรียนแลกเปลี่ยน ม. Sophia University
          </h2>
          
          </div>
        <div className="japan">
          <p className="text-xl font-bold mb-4 font-kanit">P'Japan</p>
          <img src="./src/images/profile/mockup.jpg" alt=""  className="w-[300px] mb-5"/>
          <h2 className="text-xl font-bold mb-4 font-kanit">
          ประวัติการศึกษา<br />
จบการศึกษาจากม.ธรรมศาสตร์ ศิลปศาสตร์ เอกภาษาญี่ปุ่น <br />
นักเรียนแลกเปลี่ยน ม. Hokkaido University
          </h2>
          
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
