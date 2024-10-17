import React, { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseCard from "../components/CourseCard";

function Course() {
  const role = useAuthStore((state) => state.role);


 //reverse 
//  const reversedArticles = [...article].reverse();

//  // Pagination logic
//  const indexOfLastArticle = currentPage * itemsPerPage;
//  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
//  const currentArticles = reversedArticles.slice(indexOfFirstArticle, indexOfLastArticle);
//  const totalPages = Math.ceil(article.length / itemsPerPage);

 const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
 const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));


  return (
    <div className="mx-64 m-16 font-kanit">
      <div className="pt-10 flex justify-center">
        <h2 className="text-2xl font-bold mb-4 font-kanit ">
          คอร์สเรียนภาษาญี่ปุ่น
          <span className="font-noto-sans-jp text-2xl"> コース</span>
        </h2>
      </div>
      <div className="divider -mt-3"></div>
      <div className="flex justify-end mb-4">
        <label className="input input-bordered flex items-center w-[500px] ">
          <input type="text" className="grow" placeholder="Search" />
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
      <div className="flex gap-5 justify-end mb-4">
        {role === "ADMIN" ? (
          <Link to="/course/create" className="btn btn-sm bg-pink-300 text-lg ">
            Create course
          </Link>
        ) : null}
        <button className="btn btn-sm">JLPT N5</button>
        <button className="btn btn-sm">JLPT N4</button>
        <button className="btn btn-sm">JLPT N3</button>
        <button className="btn btn-sm font-noto-sans-jp">その他</button>
        <button className="btn btn-sm">All</button>
      </div>

      {/* Pagination controls */}
      {/* <div className="flex justify-center mb-10 items-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="btn btn-secondary w-24 px-6"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="btn btn-secondary  w-24 px-6"
        >
          Next
        </button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Course;
