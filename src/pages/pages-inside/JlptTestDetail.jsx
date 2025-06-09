import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const mockQuestions = [
  {
    id: 1,
    content: "「ありがとう」แปลว่าอะไร?",
    choices: ["ขอโทษ", "ขอบคุณ", "ลาก่อน", "สวัสดี"],
    correct: 1,
    explanation: "\u300cありがとう\u300d แปลว่า ขอบคุณ ใช้ในสถานการณ์ทั่วไป",
  },
  {
    id: 2,
    content: "「さようなら」ใช้ในสถานการณ์ใด?",
    choices: ["พบกันใหม่", "ลาก่อน", "สวัสดีตอนเช้า", "ขอบคุณ"],
    correct: 1,
    explanation: "ใช้เมื่อจะจากกันนาน เช่น ย้ายบ้านหรือเลิกเรียน",
  },
  {
    id: 3,
    content: "คำว่า「いぬ」หมายถึงอะไร?",
    choices: ["แมว", "หมา", "นก", "ปลา"],
    correct: 1,
    explanation: "\u300cいぬ\u300d แปลว่า หมา หรือ สุนัข",
  },
];

export default function JlptTestDetail() {
  const navigate = useNavigate();
  const { level } = useParams();
  const [selected, setSelected] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get(`${URL}/jlpt/api/jlpt-tests/${level}`);
        console.log("res", res);
        setTests(res.data);
      } catch (err) {
        console.error("Failed to fetch test data", err);
      }
    };
    fetchTests();
  }, [level]);

  const handleChoice = (questionId, choiceIdx) => {
    setSelected({ ...selected, [questionId]: choiceIdx });
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div>
        <h1 className="text-center lg:text-left text-3xl pt-16 font-bold mb-4">
          JLPTN5
        </h1>
        <h1>
          N5 – เข้าใจคำศัพท์พื้นฐาน คำช่วย และบทสนทนาในชีวิตประจำวัน เช่น
          การแนะนำตัว การถามทาง
        </h1>
        <div className="divider"></div>
      </div>
      <div className="grid lg:grid-cols-4 gap-8 px-4 py-8 max-w-8xl mx-auto">
        {/* Left: Quiz questions */}
        <div className="lg:col-span-2 space-y-6">
          {mockQuestions.map((q) => (
            <div key={q.id} className="p-4 border rounded-xl shadow bg-white">
              <p className="font-bold mb-2">
                ข้อ {q.id}: {q.content}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {q.choices.map((c, idx) => {
                  const isSelected = selected[q.id] === idx;
                  const isCorrect = q.correct === idx;
                  const showColor = showAnswer
                    ? isCorrect
                      ? "bg-green-200"
                      : isSelected
                      ? "bg-red-200"
                      : ""
                    : isSelected
                    ? "bg-blue-200"
                    : "";

                  return (
                    <button
                      key={idx}
                      onClick={() => handleChoice(q.id, idx)}
                      className={`p-2 border rounded ${showColor}`}
                    >
                      {String.fromCharCode(65 + idx)}. {c}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          <button
            onClick={() => setShowAnswer(true)}
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded shadow hover:bg-pink-600 mx-auto"
          >
            ดูเฉลยทั้งหมด
          </button>
        </div>
        <div className="space-y-6">
          {showAnswer &&
            mockQuestions.map((q) => (
              <div
                key={q.id}
                className="p-4 border-l-4 border-pink-400 bg-pink-50 rounded shadow"
              >
                <p className="font-bold mb-2">เฉลยข้อ {q.id}</p>
                <p className="mb-1">
                  ✅ คำตอบที่ถูกคือ {String.fromCharCode(65 + q.correct)}.{" "}
                  {q.choices[q.correct]}
                </p>
                <p className="text-sm text-gray-700">{q.explanation}</p>
              </div>
            ))}
        </div>

        {/* Right: List of tests */}
        <div>
          <div className="space-y-6 bg-gray-100 p-4 rounded shadow-md h-fit min-h-72">
            <h2 className="font-bold text-lg mb-2">ข้อสอบทั้งหมดใน {level}</h2>
            <ul className="space-y-2">
              {tests.map((test) => (
                <li
                  key={test.id}
                  className="cursor-pointer hover:text-pink-600"
                  onClick={() => navigate(`/jlpttest/${test.id}`)}
                >
                  {test.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center bg-red-100 p-4 mt-5 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">ข้อมูลข้อสอบ</h3>
            <p className="mb-2">ราคา: 299 บาท</p>
            <img src="" alt="" className="w-full rounded-lg" />

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <button className="btn btn-primary w-full">สั่งซื้อข้อสอบ</button>
              <button className="btn btn-secondary w-full">
                สมัครสมาชิก メンバー登録
              </button>
            </div>
          </div>
        </div>
        {/* Bottom section full width */}
      </div>
    </div>
  );
}
