import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";

const URL = import.meta.env.VITE_API_URL;

export default function JlptTestDetail() {
  const navigate = useNavigate();
  const { level } = useParams();
  const [selected, setSelected] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [tests, setTests] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);
  const [jlptLevel, setJlptLevel] = useState([]);
  const [activeTestId, setActiveTestId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const questionsWithoutPassage = questions.filter((q) => !q.passageId);

  const questionsByPassage = questions
    .filter((q) => q.passageId)
    .reduce((acc, q) => {
      if (!acc[q.passageId]) acc[q.passageId] = [];
      acc[q.passageId].push(q);
      return acc;
    }, {});

  const renderQuestion = (q) => {
    const correctChoice = q.choices.find((c) => c.isCorrect);

    return (
      <div
        key={q.id}
        className="p-6 border rounded-2xl shadow-md bg-white space-y-3"
      >
        <div className="flex items-center gap-2 text-lg font-semibold text-pink-700">
          <span>📘 ข้อ {q.number}</span>
          <span className="text-gray-800">{q.content}</span>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {q.choices.map((c, idx) => {
            const isSelected = selected[q.id] === idx;
            const isCorrect = c.isCorrect;
            const showColor = showAnswer
              ? isCorrect
                ? "bg-green-100 border-green-400 text-green-800"
                : isSelected
                ? "bg-red-100 border-red-400 text-red-800"
                : "bg-white"
              : isSelected
              ? "bg-blue-100 border-blue-400 text-blue-800"
              : "bg-white";

            return (
              <button
                key={idx}
                onClick={() => handleChoice(q.id, idx)}
                className={`border p-3 rounded-lg text-left font-medium transition-all duration-150 ${showColor}`}
              >
                {String.fromCharCode(65 + idx)}. {c.text}
              </button>
            );
          })}
        </div>

        {/* แสดงเฉลยใต้คำถาม */}
        {showAnswer && (
          <div className="mt-4 p-4 bg-pink-50 border-l-4 border-pink-400 rounded-md space-y-1">
            <p className="font-semibold text-pink-700">
              ✅ คำตอบที่ถูกคือ{" "}
              {correctChoice ? correctChoice.text : "ไม่พบคำตอบ"}
            </p>
            <p className="text-sm text-gray-700">
              {q.Explanation?.text || "ไม่มีคำอธิบายเพิ่มเติม"}
            </p>
          </div>
        )}
      </div>
    );
  };

  const fetchTestsDetails = async (id) => {
    try {
      const res = await axios.get(`${URL}/jlpt/api/jlpt-tests/${level}/${id}`);
      setQuestions(res.data);
      setShowAnswer(false); // reset เฉลย
      setSelected({}); // reset choice
      setActiveTestId(id);
      const resJlpt = await axios.get(`${URL}/jlpt/api/jlpt-tests`);
      const jlptLevel = resJlpt.data.find((lvl) => lvl.level === level);
      setJlptLevel(jlptLevel);
    } catch (err) {
      console.error("Failed to fetch test detail", err);
    }
  };

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${URL}/jlpt/api/jlpt-tests/${level}`);
        setTests(res.data);
        const freeTest = res.data.find((test) => test.price === 0);
        if (freeTest) {
          fetchTestsDetails(freeTest.id);
        }
        setIsLoading(false);
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
      <div className="pt-16">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded shadow inline-flex items-center gap-2"
        >
          ← ย้อนกลับ
        </button>
      </div>
      <div>
        <h1 className="text-center lg:text-left text-3xl  font-bold mb-4">
          {jlptLevel.level}
        </h1>
        <h1>
          {jlptLevel.description}
          {/* N5 – เข้าใจคำศัพท์พื้นฐาน คำช่วย และบทสนทนาในชีวิตประจำวัน เช่น
          การแนะนำตัว การถามทาง */}
        </h1>
        <div className="divider"></div>
      </div>

      {/* Hero sections */}
      {showAnswer &&
        score !== null &&
        (score > 0 ? (
          <div className="grid">
            <button
              onClick={() => {
                setSelected({});
                setShowAnswer(false);
                setScore(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-xl shadow transition mb-3 "
            >
              🔄 เริ่มทำใหม่อีกครั้ง
            </button>
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded shadow text-green-800 text-lg font-semibold">
              🎉 คุณได้ {score} / {questions.length} คะแนน (
              {Math.round((score / questions.length) * 100)}%)
            </div>
          </div>
        ) : (
          <div className="grid">
            <button
              onClick={() => {
                setSelected({});
                setShowAnswer(false);
                setScore(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-3  bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-xl shadow transition "
            >
              🔄 เริ่มทำใหม่อีกครั้ง
            </button>
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded shadow text-red-800 text-lg font-semibold">
              😢 คุณได้ {score} / {questions.length} คะแนน (
              {Math.round((score / questions.length) * 100)}%)
            </div>
          </div>
        ))}
      {/* หัวใหญ่ */}
      {isLoading ? (
        <div className="flex justify-center items-center w-full min-h-[50vh]">
          <Spinner />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 gap-8 px-4 py-8 max-w-8xl mx-auto">
          {/* Left: Quiz questions */}
          <div className="lg:col-span-3 space-y-6">
            {/* คำถามเดี่ยว (ไม่มี passage) */}
            {questionsWithoutPassage.map(renderQuestion)}

            {/* คำถามจาก passage */}
            {Object.entries(questionsByPassage).map(([passageId, qs]) => {
              const first = qs[0];
              const passageImage = first?.passage?.imageUrl;
              const passageTitle = first?.passage?.title;

              return (
                <div
                  key={passageId}
                  className="space-y-4 p-4 border-2 border-pink-300 rounded-xl shadow-md bg-white"
                >
                  <p className="text-lg text-center font-bold text-pink-500">
                    {passageTitle}
                  </p>
                  {passageImage && (
                    <img
                      src={passageImage}
                      alt="passage"
                      className="w-full rounded-lg mb-4"
                    />
                  )}
                  {qs.map(renderQuestion)}
                </div>
              );
            })}
            {questions && (
              <button
                onClick={() => {
                  let correct = 0;
                  questions.forEach((q) => {
                    const selectedIndex = selected[q.id];
                    const correctChoice = q.choices.findIndex(
                      (c) => c.isCorrect
                    );
                    if (selectedIndex === correctChoice) {
                      correct++;
                    }
                  });
                  setScore(correct); // ✅ เก็บคะแนน
                  setShowAnswer(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded shadow hover:bg-pink-600"
              >
                ส่งคำตอบ
              </button>
            )}
          </div>

          {/* Right: List of tests */}
          <div className="lg:col-start-4">
            <div className="space-y-6 bg-gray-100 p-4 rounded shadow-md h-fit">
              <h2 className="font-bold text-lg mb-2">
                ข้อสอบทั้งหมดใน {level}
              </h2>
              <ul className="space-y-2">
                {tests.map((test) => (
                  <li
                    key={test.id}
                    className={`cursor-pointer ${
                      activeTestId === test.id
                        ? " text-pink-600 font-semibold"
                        : "hover:text-pink-500"
                    }`}
                    // onClick={() => navigate(`/jlpttest/${test.id}`)}
                    onClick={() => fetchTestsDetails(test.id)}
                  >
                    {test.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-red-100 p-4 mt-5 rounded-lg mb-4">
              <img
                src={jlptLevel.jlptThumbnail}
                alt=""
                className="w-full rounded-lg mb-2"
              />
              <h3 className="text-xl font-semibold mb-2 ">สมัครทำข้อสอบเลย</h3>
              <p className="mb-1">ทำข้อสอบได้ทุกชุด ตลอดชีพ</p>
              <p className="mb-1">ราคา: 299 บาท</p>

              <div className="gap-4 mt-4">
                <button className="btn btn-secondary w-full">
                  สมัครสมาชิก メンバー登録
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
