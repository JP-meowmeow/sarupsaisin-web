import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import axios from "axios";
import Spinner from "../components/Spinner";
import BookCard from "../components/BookCard";

const URL = import.meta.env.VITE_API_URL;

function Book() {
  const role = useAuthStore((state) => state.role);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`${URL}/book/getallbook`);
        setBooks(res.data.books); // สมมติ backend ส่ง { books: [...] }
        setIsLoading(false);
      } catch (err) {
        console.log("Error fetching books:", err);
      }
    };

    fetchBooks();
  }, []);

   return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div className="pt-10 flex justify-center">
        <h2 className="text-xl sm:text-2xl text-black font-bold mb-4 font-kanit text-center">
          หนังสือเรียนภาษาญี่ปุ่น / ข้อสอบวัดระดับ JLPT
          <br />
          <span className="font-noto-sans-jp text-2xl">教科書 / 日本語能力試験</span>
        </h2>
      </div>

      <div className="divider -mt-3 mb-8"></div>
      <div className="flex justify-end">

      {role === "ADMIN" && (
        <Link to="/book/create" className="btn btn-sm bg-pink-300 text-lg">
                  Create book
                </Link>
              )}

              </div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((item) => (
            <BookCard key={item.id} book={item}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Book;
