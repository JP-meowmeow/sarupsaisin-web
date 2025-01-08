import React, { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import axios from "axios";
import ArticleCardDashboard from "../components/ArticleCardDashboard";
import CourseCardDashboard from "../components/CourseCardDashboard";
const URL = import.meta.env.VITE_API_URL;

function UserInfo() {
  const token = useAuthStore((state) => state.token);
  const role = useAuthStore((state) => state.role);

  const [articleData, setArticleData] = useState([]);
  const [courseData, setCourseData] = useState([]);

  const [userCourseData, setUserCourseData] = useState([]);

  // Pagination state
  const [currentPageArticle, setCurrentPageArticle] = useState(1);
  const [currentPageCourse, setCurrentPageCourse] = useState(1);
  const itemsPerPage = 4;

   // Pagination logic for articles
   const reversedArticle = [...articleData].reverse();
   const indexOfLastArticle = currentPageArticle * itemsPerPage;
   const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
   const currentArticle = reversedArticle.slice(indexOfFirstArticle, indexOfLastArticle);
   const totalArticlePages = Math.ceil(articleData.length / itemsPerPage);
 
   const nextArticlePage = () => setCurrentPageArticle((prev) => Math.min(prev + 1, totalArticlePages));
   const prevArticlePage = () => setCurrentPageArticle((prev) => Math.max(prev - 1, 1));
 
   // Pagination logic for courses
   const reversedCourse = [...courseData].reverse();
   const indexOfLastCourse = currentPageCourse * itemsPerPage;
   const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
   const currentCourse = reversedCourse.slice(indexOfFirstCourse, indexOfLastCourse);
   const totalCoursePages = Math.ceil(courseData.length / itemsPerPage);
 
   const nextCoursePage = () => setCurrentPageCourse((prev) => Math.min(prev + 1, totalCoursePages));
   const prevCoursePage = () => setCurrentPageCourse((prev) => Math.max(prev - 1, 1));



  useEffect(() => {
    const run = async () => {
      await getArticle();
      await getCourse();
      await getUserCourse();
    };

    run();
  }, []);

  const handleDeleteArticle = async (id) => {
    try {
      // await axios.delete(`http://localhost:8000/article/deletearticle/${id}`, {
      await axios.delete(`${URL}/article/deletearticle/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Update state to remove deleted article
      setArticleData((prevData) =>
        prevData.filter((article) => article.id !== id)
      );
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      // await axios.delete(`http://localhost:8000/course/deletecourse/${id}`, {
      await axios.delete(`${URL}/course/deletecourse/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Update state to remove deleted course
      setCourseData((prevData) =>
        prevData.filter((course) => course.id !== id)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  async function getUserCourse() {
    const response = await axios.get(
      // "http://localhost:8000/enrollment/getuserbuycoursedata",
      `${URL}/enrollment/getuserbuycoursedata`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setUserCourseData(response.data);
  }

  async function getArticle() {
    const response = await axios.get(
      `${URL}/article/getarticledashboard`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setArticleData(response.data.response);
  }

  async function getCourse() {
    const response = await axios.get(
      // "http://localhost:8000/course/getcoursedashboard",
      `${URL}/course/getcoursedashboard`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setCourseData(response.data.response);
  }

  return (
    <>
    {/* ADMIN */}
      {role === "ADMIN" ? (
        // pt-24 pb-24 mx-24
        <div className="px-4 sm:px-8 lg:px-16 py-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
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
            <div className="grid grid-cols-4 gap-5 mb-5 overflow-x-hidden">
              {currentCourse.map((item) => (
                <CourseCardDashboard
                  key={item.id}
                  item={item}
                  onDelete={() => {
                    handleDeleteCourse(item.id);
                  }}
                />
              ))}
            </div>
            {/* Pagination controls for Courses */}
            <div className="flex justify-center mb-10 items-center">
              <button
                onClick={prevCoursePage}
                disabled={currentPageCourse === 1}
                className="btn btn-secondary w-24 px-6"
              >
                Previous
              </button>
              <span className="mx-4">
                Page {currentPageCourse} of {totalCoursePages}
              </span>
              <button
                onClick={nextCoursePage}
                disabled={currentPageCourse === totalCoursePages}
                className="btn btn-secondary w-24 px-6"
              >
                Next
              </button>
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
            <div className="grid grid-cols-4 gap-5 mb-5 overflow-x-hidden">
              {currentArticle.map((item) => (
                <ArticleCardDashboard
                  key={item.id}
                  item={item}
                  onDelete={() => {
                    handleDeleteArticle(item.id);
                  }}
                />
              ))}
            </div>
             {/* Pagination controls for Articles */}
             <div className="flex justify-center mb-10 items-center">
              <button
                onClick={prevArticlePage}
                disabled={currentPageArticle === 1}
                className="btn btn-secondary w-24 px-6"
              >
                Previous
              </button>
              <span className="mx-4">
                Page {currentPageArticle} of {totalArticlePages}
              </span>
              <button
                onClick={nextArticlePage}
                disabled={currentPageArticle === totalArticlePages}
                className="btn btn-secondary w-24 px-6"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        // User
        <div className="px-4 sm:px-8 lg:px-16 py-16  min-h-screen bg-[#FCFBF8] overflow-x-hidden">
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
            <div className="grid grid-cols-4 gap-5 mb-5 overflow-x-hidden">
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
