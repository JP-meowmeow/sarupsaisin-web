import React from "react";
import JlptCard from '../components/JlptCard'

function JlptTest() {

    const jlptDetails = [
        {
        id:1,
        name:"JLPT N5",
        details:"N5 : สามารถเข้าใจพื้นฐานภาษาญี่ปุ่นได้ในระดับหนึ่ง"},
        {
        id:2,
        name:"JLPT N4",
        details:"N4 : สามารถเข้าใจพื้นฐานภาษาญี่ปุ่น"},
        {
        id:3,
        name:"JLPT N3",
        details:"N3 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ชีวิตประจำวันได้ในระดับหนึ่ง"},
        {
        id:4,
        name:"JLPT N2",
        details:"N2 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ชีวิตประจำวันได้ และสามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ในวงกว้างได้ในระดับหนึ่ง"},
        {
        id:5,
        name:"JLPT N1",
        details:"N1 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ต่าง ๆ ในวงกว้างได้"},
]

    
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div className="pt-10 flex justify-center">
        <h2 className="text-xl sm:text-2xl  font-bold mb-4 font-kanit ">
          JPLT
          <span className="font-noto-sans-jp text-2xl">日本語能力試験</span>
        </h2>
      </div>
      <div className="divider -mt-3"></div>
      <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">
      {jlptDetails.map((item) => (
          <JlptCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default JlptTest;
