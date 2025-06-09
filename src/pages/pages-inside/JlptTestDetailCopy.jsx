import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const JlptTestDetail = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const [tests, setTest] = useState(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await axios.get(`${URL}/jlpt/api/jlpt-tests/${level}`);
        setTest(res.data);
      } catch (err) {
        console.error("Failed to fetch test data", err);
      }
    };
    fetchTest();
  }, []); //[testId]

  const handleStartTest = () => {
    console.log("hi");
    // navigate(`/jlpt/do/${testId}`);
  };

  if (!tests) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <h1 className="text-center lg:text-left text-3xl mt-24 font-bold mb-4">
        JLPTN5
      </h1>
      <div className="divider"></div>
      {/* <div className="pt-10 flex justify-center"> */}

      {/* </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {/* Left section */}
        <div className="md:col-span-2">
          <img
            src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1733926554/1080_px_x_1080_px_allavg.png"
            // src={tests.thumbnailUrl}
            alt="JLPT Cover"
            className="w-[50%] rounded shadow"
          />
          <p className="mt-4 text-gray-700">dasdsa</p>
        </div>

        {/* Right section */}
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="font-bold text-lg mb-2">บทเรียนในชุดนี้</h2>
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
          {/* <ul className="space-y-2">
          <li
            className="cursor-pointer hover:text-pink-600"
            onClick={handleStartTest}
            >
            พาร์ท 1: คำศัพท์และการอ่าน
          </li>
          <li className="text-gray-500">พาร์ท 2: ไวยากรณ์ (ยังไม่เปิด)</li>
        </ul> */}
        </div>
      </div>
    </div>
  );
};

export default JlptTestDetail;
