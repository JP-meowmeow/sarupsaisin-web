import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../store/authStore";

export default function Payment() {
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [slip, setSlip] = useState(null);

  const hdlFileChange = (e) => {
    setSlip(e.target.files[0]);
  };

  const hdlSendSlip = async (e) => {
    e.preventDefault();

    try {
      const body = new FormData();
      body.append("link", slip);
      body.append("CourseName", course.courseName);
      body.append("price", course.price);

      await sendSlip(body, token);
      navigate("/userinfo");
    } catch (err) {
      console.log("error from send slip", err);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  const sendSlip = async (body, token) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/payment/" + id,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
          "Content-Type": "multipart/form-data",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getCourse = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/payment/${id}`);
      setCourse(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  return (
    
    <div className=" 
    bg-[url('https://res.cloudinary.com/dhwgh6rof/image/upload/v1729566776/logo_pink_z8sarx.png')]
               bg-contain bg-right bg-no-repeat 
    max-md:m-0 max-md:w-full max-md:flex max-md:justify-center p-3 ">
      <div
        className="
      
      pt-16 mt-24 mb-24 border shadow-lg w-full m-auto lg:w-1/2  rounded-[64px] max-md:justify-center font-kanit p-0 lg:p-20 "
      >
        {/* <div className="max-md:hidden">
            <img
              src="/src/images/logo black.png"
              alt="Login background"
              className=" w-[100px]"
            />
          </div> */}
        <h2 className="text-2xl font-bold mb-4 font-kanit text-center ">
          ขอบคุณที่เลือกเรียนกับ{" "}
          <span className="text-[#F3747F]">สรุปสายศิลป์</span> <br />
          <span className="font-noto-sans-jp text-2xl text-[#F3747F]">
            サルプサイシンありがとうございます。！
          </span>
          <div className="divider"></div>
        </h2>
        {course ? (
          <div className="text-xl font-bold max-md:text-center">
            <h1 className="">
              คอร์สที่เลือกสมัคร{" "}
              <span className="text-2xl text-red-500">{course.courseName}</span>
            </h1>
            <h1 className="text-xl font-bold ">
              ยอดชำระ{" "}
              <span className="text-2xl text-red-500">{course.price}</span> บาท
            </h1>
          </div>
        ) : (
          <p>Loading course details...</p> // Show a loading message or spinner
        )}
        <div className="divider"></div>
        <div className="">
          <div className="flex flex-col gap-5 items-center justify-center ">
            <div className="items-center justify-center text-center">
              <span className="font-bold text-2xl">โอนผ่านธนาคาร</span>
              <br />
              หากสแกนโอนเงินเรียบร้อยโปรดแนบสลิปและคลิกปุ่ม{" "}
              <span className="text-red-500">ยืนยันการชำระเงิน</span>
            </div>
            <div className="flex text-center items-center justify-center">
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1729495686/dpa_bank_sb_2x_kjhpf6.png"
                alt=""
                className="w-[80px]"
              />
              <div>
                <h1 className="text-center">
                  ธนาคารไทยพาณิชย์ <br />
                  นางสาวแสงพร นาเมือง
                  <br />
                  เลขที่บัญชี 842-249271-8
                </h1>
              </div>
            </div>
            <div className="text-center flex flex-col gap-3 items-center justify-center">
              <h1> โปรดแนบหลักฐานการโอนเงิน</h1>
              <input
                type="file"
                className="text-center bg-fuchsia-200"
                onChange={hdlFileChange}
              />
            </div>
            <form onSubmit={hdlSendSlip} className="w-full">
              {slip ? (
                <button className="bg-[#F3747F] text-white px-4 py-2 rounded-md w-full">
                  ยืนยันการชำระเงิน
                </button>
              ) : (
                <button
                  disabled={!slip}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md w-full"
                >
                  ยืนยันการชำระเงิน
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
