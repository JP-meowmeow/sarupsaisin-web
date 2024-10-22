import React, { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import axios, { Axios } from "axios";
import ArticleCardDashboard from "../components/ArticleCardDashboard";
import CourseCardDashboard from "../components/CourseCardDashboard";

function UserInfo() {
  const token = useAuthStore((state) => state.token);
  const role = useAuthStore((state) => state.role);

  const [articleData, setArticleData] = useState([]);
  const [courseData, setCourseData] = useState([]);

  const [userCourseData,setUserCourseData] = useState([]);

  useEffect(() => {
    const run = async () => {
      await getArticle();
      await getCourse();
      await getUserCourse();
    };

    run();
  }, [articleData.length]);

  async function getUserCourse(){
    const response = await axios.get(
      'http://localhost:8000/enrollment/getuserbuycoursedata',{
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    setUserCourseData(response.data)
    console.log(response.data)
  }

  async function getArticle() {
    const response = await axios.get(
      "http://localhost:8000/article/getarticledashboard",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setArticleData(response.data.response);
    // console.log('here',articleData);
  }

  async function getCourse() {
    const response = await axios.get(
      "http://localhost:8000/course/getcoursedashboard",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setCourseData(response.data.response);
  }

  return (
    <>
      {role === "ADMIN" ? (
        <div className="pt-16 mx-24">
          <div>
            <h1>ADMIN DASH board</h1>
            <img
              src="./src/images/profile/mockup.jpg"
              className="w-[500px] mb-16"
              alt=""
            />
            <h1 className="text-2xl font-bold font-kanit mb-4">
              คอร์สเรียน{" "}
              <span className="font-noto-sans-jp text-2xl">コース</span>
            </h1>
            <div className="flex gap-5 mb-5">
              {courseData.map((item) => (
                <CourseCardDashboard key={item.id} item={item} />
              ))}
            </div>
            <div className="divider"></div>
            <h1 className="text-2xl font-bold font-kanit mb-4">
              หนังสือเรียน/ข้อสอบ{" "}
              <span className="font-noto-sans-jp text-2xl">テスト・本</span>
            </h1>
            <div className="divider"></div>
            <h1 className="text-2xl font-bold font-kanit mb-4">
              บทความ <span className="font-noto-sans-jp text-2xl">記事</span>
            </h1>
            <div className="flex gap-5 mb-5">
              {articleData.map((item) => (
                <ArticleCardDashboard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-16 mx-24">
          <div>
            <p>USER DASH board</p>
            <img
              src="./src/images/profile/mockup.jpg"
              className="w-[500px] mb-16"
              alt=""
            />
            <h1 className="text-2xl font-bold font-kanit mb-16">
              คอร์สเรียนของฉัน{" "}
              <span className="font-noto-sans-jp text-2xl">買ったコース</span>
            </h1>
            <div className="flex gap-5 mb-5">
              {userCourseData.map((item) => (
                <CourseCardDashboard key={item.id} item={item.course} />
              ))}
            </div>
            <div className="divider"></div>
            <h1 className="text-2xl font-bold font-kanit mb-16">
              หนังสือเรียน/ข้อสอบของฉัน{" "}
              <span className="font-noto-sans-jp text-2xl">
                持っているテスト・本
              </span>
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default UserInfo;
