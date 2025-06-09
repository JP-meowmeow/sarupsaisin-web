import React from "react";
import JlptCard from "../components/JlptCard";
import LandingPopup from "../components/LandingPopup";

function JlptTest() {
  const jlptDetails = [
    {
      id: 1,
      name: "JLPT N5",
      details: "N5 : สามารถเข้าใจพื้นฐานภาษาญี่ปุ่นได้ในระดับหนึ่ง",
      Level: "JLPTN5",
    },
    {
      id: 2,
      name: "JLPT N4",
      details: "N4 : สามารถเข้าใจพื้นฐานภาษาญี่ปุ่น",
      Level: "JLPTN4",
    },
    {
      id: 3,
      name: "JLPT N3",
      details:
        "N3 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ชีวิตประจำวันได้ในระดับหนึ่ง",
      Level: "JLPTN3",
    },
    {
      id: 4,
      name: "JLPT N2",
      Level: "JLPTN2",
      details:
        "N2 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ชีวิตประจำวันได้ และสามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ในวงกว้างได้ในระดับหนึ่ง",
    },
    {
      id: 5,
      name: "JLPT N1",
      Level: "JLPTN1",
      details:
        "N1 : สามารถเข้าใจภาษาญี่ปุ่นที่ใช้ในสถานการณ์ต่าง ๆ ในวงกว้างได้",
    },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      {/* <LandingPopup /> */}
      <div className="pt-10 flex justify-center">
        <h2 className="text-xl sm:text-2xl  font-bold mb-4 font-kanit text-black ">
          JPLT
          <span className="font-noto-sans-jp text-2xl">日本語能力試験</span>
        </h2>
      </div>
      <div className="divider -mt-3"></div>
      <div className="text-gray-600">
        <p>
          <span className="font-bold">การสอบ JLPT คืออะไร?</span>
          <br />
          JLPT ย่อมาจาก “Japanese Language Proficiency Test”
          หรือในภาษาญี่ปุ่นเรียกว่า 「日本語能力試験」
          เป็นการสอบวัดระดับความสามารถภาษาญี่ปุ่นสำหรับผู้ที่ไม่ได้ใช้ภาษาญี่ปุ่นเป็นภาษาแม่
          จัดสอบโดย Japan Foundation และ JEES (Japan Educational Exchanges and
          Services) ปีละ 2 ครั้งในหลายประเทศทั่วโลก รวมถึงประเทศไทยด้วย JLPT
          เป็นการสอบมาตรฐานที่ได้รับการยอมรับอย่างกว้างขวาง
          ทั้งในแวดวงการศึกษาและการทำงาน ซึ่งมีผู้เข้าสอบทั่วโลกมากกว่า 1
          ล้านคนต่อปี
        </p>
        <p className="mt-1">
          <span className="font-bold">
            ข้อสอบ JLPT มีกี่ระดับ? ต่างกันอย่างไร?
          </span>
          <br />
          JLPT แบ่งออกเป็นทั้งหมด 5 ระดับ โดยระดับ N5 คือง่ายที่สุด และ N1
          คือตัวยากที่สุด N5 – เข้าใจคำศัพท์พื้นฐาน คำช่วย
          และบทสนทนาในชีวิตประจำวัน เช่น การแนะนำตัว การถามทาง N4 –
          เข้าใจบทสนทนาในระดับพื้นฐานได้ดีขึ้น รวมถึงประโยคที่ซับซ้อนเล็กน้อย
          เช่น การเล่าประสบการณ์ในอดีต N3 –
          เป็นระดับกลางที่สามารถฟังและอ่านเรื่องทั่วไปได้ดี เช่น ข่าวง่าย ๆ
          หรือบทความสั้น N2 – ใช้ภาษาญี่ปุ่นในสถานการณ์จริงได้หลากหลาย
          ทั้งที่ทำงานและในสื่อ เช่น หนังสือพิมพ์ รายการข่าว N1 – ระดับสูงสุด
          เข้าใจเนื้อหายากและภาษาทางวิชาการ
          มีความแม่นยำในการใช้ภาษาทั้งในการอ่านและการฟัง
        </p>
      </div>
      <div className="divider "></div>
      <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">
        {jlptDetails.map((item) => (
          <JlptCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default JlptTest;
