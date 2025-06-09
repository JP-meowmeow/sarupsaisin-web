import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import useAuthStore from "../../../store/authStore";
import { LockLogo } from "../../../src/icons/index";

const mockQuestions = [
  {
    id: 1,
    content: "「ありがとう」แปลว่าอะไร?",
    choices: ["ขอโทษ", "ขอบคุณ", "ลาก่อน", "สวัสดี"],
    correct: 1,
    explanation: "\u300cありがとう\u300d แปลว่า ขอบคุณ ใช้ในสถานการณ์ทั่วไป"
  },
  {
    id: 2,
    content: "「さようなら」ใช้ในสถานการณ์ใด?",
    choices: ["พบกันใหม่", "ลาก่อน", "สวัสดีตอนเช้า", "ขอบคุณ"],
    correct: 1,
    explanation: "ใช้เมื่อจะจากกันนาน เช่น ย้ายบ้านหรือเลิกเรียน"
  },
  {
    id: 3,
    content: "คำว่า「いぬ」หมายถึงอะไร?",
    choices: ["แมว", "หมา", "นก", "ปลา"],
    correct: 1,
    explanation: "\u300cいぬ\u300d แปลว่า หมา หรือ สุนัข"
  }
];


export default function InsideJlpt() {
  const [selected, setSelected] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  const handleChoice = (questionId, choiceIdx) => {
    setSelected({ ...selected, [questionId]: choiceIdx });
  };

  return (
    <div className="bg-[#FCFBF8] p-4 pb-16 lg:p-16  font-kanit min-h-screen">
       <h1 className="text-center lg:text-left text-3xl mt-24 font-bold mb-4">
          ข้อสอบ JLPT N5
        </h1>
      <div className="divider"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-16 max-w-6xl mx-auto">
      {/* ด้านซ้าย: ข้อสอบ */}
      <div className="space-y-6">
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
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded shadow hover:bg-pink-600"
          >
          ดูเฉลยทั้งหมด
        </button>
      </div>

      {/* ด้านขวา: เฉลย */}
      <div className="space-y-6">
        {showAnswer &&
          mockQuestions.map((q) => (
            <div
            key={q.id}
            className="p-4 border-l-4 border-pink-400 bg-pink-50 rounded shadow"
            >
              <p className="font-bold mb-2">เฉลยข้อ {q.id}</p>
              <p className="mb-1">
                ✅ คำตอบที่ถูกคือ {String.fromCharCode(65 + q.correct)}. {q.choices[q.correct]}
              </p>
              <p className="text-sm text-gray-700">{q.explanation}</p>
            </div>
          ))}
      </div>
    </div>
          </div>
  );
}

// export default InsideJlpt;
