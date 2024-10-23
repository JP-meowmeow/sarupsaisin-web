import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import YouTubeEmbed from "../../components/YoutubeEmbed";
import useAuthStore from "../../../store/authStore";
import { LockLogo } from "../../../src/icons/index";
const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const [buyStatus, setBuyStatus] = useState(false);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const isBuy = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/enrollment/" + id,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBuyStatus(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/course/getcourse/${id}`
        );
        setCourse(response.data);
        if (response.data.units?.length > 0) {
          setActiveUnit(response.data.units[0]);
        }
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    isBuy();
    getCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-16 font-kanit">
      <h1 className="text-3xl mt-24 font-bold mb-4">
        คอร์ส {course.courseName}
      </h1>
      <div className="divider"></div>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {activeUnit ? (
            activeUnit && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">
                  บทเรียน {activeUnit.title}
                </h2>
                <YouTubeEmbed url={activeUnit.youtubeLink} />

                <p className="mt-4 ">
                  รายละเอียดบทเรียน : <br />
                  {activeUnit.description}
                </p>
                <div className="divider"></div>
              </div>
            )
          ) : (
            <YouTubeEmbed url="https://www.youtube.com/embed/XnPOEGJcy3w?si=Q64W_Ao723M0-GvC" />
          )}

          <h2 className="text-xl font-semibold mb-2">Course Description</h2>
          <p className="mb-4">{course.shortDescription}</p>
          <h3 className="text-lg font-semibold mb-2">Detailed Description</h3>
          <p>{course.longDescription}</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              บทเรียนทั้งหมดของคอร์ส
            </h3>
            <ul>
              {course.isFree === "FREE"
                ? course.unit.map((unit) => (
                    <li key={unit.id} className="mb-2">
                      <button
                        onClick={() => setActiveUnit(unit)}
                        className={`w-full text-left p-2 rounded ${
                          activeUnit && activeUnit.id === unit.id
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        บทเรียน {unit.unitNumber}: {unit.title}
                      </button>
                    </li>
                  ))
                : buyStatus
                ? course.unit.map((unit) => (
                    <li key={unit.id} className="mb-2">
                      <button
                        onClick={() => setActiveUnit(unit)}
                        className={`w-full text-left p-2 rounded ${
                          activeUnit && activeUnit.id === unit.id
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        บทเรียน {unit.unitNumber}: {unit.title}
                      </button>
                    </li>
                  ))
                : course.unit.map((unit) => (
                    <li key={unit.id} className="mb-2">
                      <button
                        disabled
                        onClick={() => setActiveUnit(unit)}
                        className={`w-full text-left p-2 rounded flex items-center gap-2 ${
                          activeUnit && activeUnit.id === unit.id
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        <span>
                          บทเรียน {unit.unitNumber}: {unit.title}{" "}
                        </span>
                        <LockLogo className="w-4" />
                      </button>
                    </li>
                  ))}
            </ul>
          </div>
          {course.isFree === "FREE" ? (
            <div></div>
          ) : buyStatus ? (
            <div></div>
          ) : (
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2">ข้อมูลคอร์สเรียน</h3>
              <p className="mb-2">ราคา: {course.price} บาท</p>
              <img
                src={course.courseThumbnailLink}
                alt={course.courseName}
                className="w-full rounded-lg"
              />
              {token ? (
                <Link
                  to={`/payment/${id}`}
                  className="btn btn-primary w-full mt-4"
                >
                  สมัครเรียนคอร์สเลย
                </Link>
              ) : (
                <Link to={`/register`} className="btn btn-primary w-full mt-4">
                  สมัครสมาชิก メンバー登録
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
