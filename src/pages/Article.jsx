import React, { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import Spinner from "../components/Spinner";

const URL = import.meta.env.VITE_API_URL;

function Article() {
  const role = useAuthStore((state) => state.role);
  const [article, setArticle] = useState([]);
  const [allArticle, setAllArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  useEffect(() => {
    getAllArticle();
  }, []);

  const getAllArticle = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        // "http://localhost:8000/article/getallarticle"
        `${URL}/article/getallarticle`
      );
      setArticle(response.data.allArticle);
      setAllArticle(response.data.allArticle);
      setIsLoading(false);
    } catch (err) {
      const errMessage = err.response?.data?.error || err.message;
      console.log(errMessage);
      toast.error(errMessage);
    }
  };

  const filterN5 = () => {
    const JLPTN5 = allArticle.filter((item) => {
      return item.category === "JLPTN5";
    });

    setArticle(JLPTN5);
    setSelectedFilter("JLPTN5");
  };

  const filterN4 = () => {
    const JLPTN4 = allArticle.filter((item) => {
      return item.category === "JLPTN4";
    });

    setArticle(JLPTN4);
    setSelectedFilter("JLPTN4");
  };

  const filterN3 = () => {
    const JLPTN3 = allArticle.filter((item) => {
      return item.category === "JLPTN3";
    });

    setArticle(JLPTN3);
    setSelectedFilter("JLPTN3");
  };

  const filterOther = () => {
    const OTHER = allArticle.filter((item) => {
      return item.category === "OTHER";
    });

    setArticle(OTHER);
    setSelectedFilter("OTHER");
  };

  const filterAll = () => {
    setArticle(allArticle);
    setSelectedFilter("ALL");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 2 rows * 4 items per row
  //reverse
  const reversedArticles = [...article].reverse();

  // Pagination logic
  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = reversedArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(article.length / itemsPerPage);

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div className="pt-10 flex justify-center">
        <h2 className="text-xl sm:text-2xl text-black font-bold mb-4 font-kanit text-center ">
          บทความภาษาญี่ปุ่นที่น่าสนใจ
          <br/>
          <span className="font-noto-sans-jp text-2xl"> 日本語の記事</span>
        </h2>
      </div>
      <div className="divider -mt-3"></div>
      {/* searchbar */}
      {/* <div className="flex justify-end mb-4">
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
      </div> */}

      <div className="flex gap-3 flex-wrap justify-center md:justify-end mb-5">
        {role === "ADMIN" ? (
          <Link
            to="/article/create"
            className="btn btn-sm bg-pink-300 text-lg "
          >
            Create Post
          </Link>
        ) : null}
        <button className={`btn btn-sm ${selectedFilter === "JLPTN5" ? "bg-pink-300 border-pink-300 text-black" : "border-slate-200 bg-slate-200"}`} onClick={filterN5}>
          JLPT N5
        </button>
        <button className={`btn btn-sm ${selectedFilter === "JLPTN4" ? "bg-pink-300 border-pink-300 text-black" : "border-slate-200 bg-slate-200"}`} onClick={filterN4}>
          JLPT N4
        </button>
        <button className={`btn btn-sm ${selectedFilter === "JLPTN3" ? "bg-pink-300 border-pink-300 text-black" : "border-slate-200 bg-slate-200"}`} onClick={filterN3}>
          JLPT N3
        </button>
        <button className={`btn btn-sm font-noto-sans-jp ${selectedFilter === "OTHER" ? "bg-pink-300 border-pink-300 text-black" : "border-slate-200 bg-slate-200"}`}  onClick={filterOther}>
          その他
        </button>
        <button className={`btn btn-sm ${selectedFilter === "ALL" ? "bg-pink-300 border-pink-300 text-black" : "border-slate-200 bg-slate-200"}`} onClick={filterAll}>
          All
        </button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center w-full min-h-[50vh]">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1  mb-4 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentArticles.map((item) => (
            <ArticleCard key={item.id} item={item} />
          ))}
        </div>
      )}
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

export default Article;
