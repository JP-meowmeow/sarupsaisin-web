import React, { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseCard from "../components/CourseCard";
const URL = import.meta.env.VITE_API_URL;

function Course() {
  const role = useAuthStore((state) => state.role);
  const [course, setCourse] = useState([]);
  const [allCourse,setAllCourse] =useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  //reverse 
  const reversedCourse = [...course].reverse();

  //  // Pagination logic
   const indexOfLastCourse = currentPage * itemsPerPage;
   const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
   const currentCourse = reversedCourse.slice(indexOfFirstCourse, indexOfLastCourse);
   const totalPages = Math.ceil(course.length / itemsPerPage);

   const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
   const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  useEffect(()=>{
    getAllCourse();
  },[])

  const filterN5 = () => {
    const JLPTN5 = allCourse.filter((item) => {
      return item.category === "JLPTN5";
    });

    setCourse(JLPTN5);
  };

  const filterN4 = () => {
    const JLPTN4 = allCourse.filter((item) => {
      return item.category === "JLPTN4";
    });

    setCourse(JLPTN4);
  };

  const filterN3 = () => {
    const JLPTN3 = allCourse.filter((item) => {
      return item.category === "JLPTN3";
    });

    setCourse(JLPTN3);
  };

  const filterOther = () => {
    const OTHER = allCourse.filter((item) => {
      return item.category === "OTHER";
    });

    setCourse(OTHER);
  };

  const filterAll = () => {
  
    setCourse(allCourse);
  };


  const getAllCourse = async ()=>{
    // const response = await axios.get('http://localhost:8000/course/getallcourse')
    const response = await axios.get(`${URL}/course/getallcourse`)
    console.log('response',response)
    setCourse(response.data.allCourse)
    setAllCourse(response.data.allCourse)
  }



  return (
    <div className="mx-4 sm:mx-8 lg:mx-16 my-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div className="pt-10 flex justify-center">
        <h2 className="text-xl sm:text-2xl  font-bold mb-4 font-kanit ">
          คอร์สเรียนภาษาญี่ปุ่น
          <span className="font-noto-sans-jp text-2xl"> コース</span>
        </h2>
      </div>
      <div className="divider -mt-3"></div>
      <div className="flex justify-end mb-4">
        <label className="input input-bordered flex items-center w-full md:w-1/2 lg:w-1/3 ">
          <input type="text" className="flex-grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex gap-3 flex-wrap justify-center md:justify-end mb-5">
        {role === "ADMIN" && (
          <Link to="/course/create" className="btn btn-sm bg-pink-300 text-lg ">
            Create course
          </Link>
        )}
        <button className="btn btn-sm" onClick={filterN5}>JLPT N5</button>
        <button className="btn btn-sm" onClick={filterN4}>JLPT N4</button>
        <button className="btn btn-sm" onClick={filterN3}>JLPT N3</button>
        <button className="btn btn-sm font-noto-sans-jp" onClick={filterOther}>その他</button>
        <button className="btn btn-sm" onClick={filterAll}>All</button>
      </div>

     

      <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
      {currentCourse.map((item) => (
          <CourseCard key={item.id} item={item} />
        ))}
        
      </div>

       {/* Pagination controls */}
       <div className="flex justify-center mb-20 items-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="btn btn-secondary w-20 sm:w-24 px-6"
        >
          Previous
        </button>
        <span className="mx-2 text-sm sm:text-base">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="btn btn-secondary  w-20 sm:w-24 px-6"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Course;
