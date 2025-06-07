import { useState, useEffect } from "react";
import imgSource from "../images/constructionLady.png";
export default function LandingPopup() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false); // auto-close after 10s (optional)
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative text-center">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black"
          onClick={() => setShowPopup(false)}
        >
          ✕
        </button>
        <img
          src={imgSource} // <-- เปลี่ยน path ตามที่คุณเซฟภาพไว้
          alt="Construction character"
          className="w-32 mx-auto mb-4"
        />
        <h2 className="text-lg font-semibold mb-2 font-kanit">
          ตอนนี้เว็บไซต์กำลังอยู่ในระหว่างการพัฒนา<br />
          <span className="font-noto-sans-jp">
            ただいまウェブサイトを作成中です。
          </span><br />
          ใช้งานได้แค่ในส่วนของ<br />
          ・Article บทความเกี่ยวกับภาษาญี่ปุ่น<br />
          ・Test ข้อสอบ JLPT เก่า<br />
        </h2>
        <p className="text-sm text-gray-600 font-kanit">
          อีกไม่นานจะเปิดให้ใช้งานเต็มรูปแบบนะครับ<br />
          <span className="font-noto-sans-jp">
            もう少しで公開予定なので、また見に来てくださいね！
          </span>
        
        </p>
      </div>
    </div>
  );
}
