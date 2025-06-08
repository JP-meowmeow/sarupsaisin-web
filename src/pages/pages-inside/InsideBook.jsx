import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";

const URL = import.meta.env.VITE_API_URL;

export default function InsideBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`${URL}/book/${id}`);
        setBook(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading book", err);
      }
    };

    fetchBook();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">ไม่พบข้อมูลหนังสือ</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFBF8] pt-24 px-4 sm:px-10 font-kanit">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/3 flex justify-center items-start">
          <img
            src={book.bookThumbnailLink}
            alt={book.bookTitle}
            className="rounded-xl shadow object-contain max-h-[400px] border"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl text-black font-bold mb-3">{book.bookTitle}</h1>
            <p className="text-gray-600 mb-3">{book.shortDescription}</p>
            <div className="text-gray-800 whitespace-pre-line mb-6 leading-relaxed">
              {book.longDescription}
            </div>
            <p className="text-2xl font-bold text-pink-600 mb-6">
              ราคา {book.price} บาท
            </p>
          </div>

          <a
            href="https://www.instagram.com/sarupsaisin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white w-full mt-2"
          >
            ติดต่อสั่งซื้อผ่าน IG
          </a>
        </div>
      </div>

      {/* Preview Pages */}
      {book.samplePages && book.samplePages.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">ตัวอย่างหน้าในหนังสือ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {book.samplePages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`sample ${i + 1}`}
                className="rounded border shadow hover:scale-105 transition duration-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="text-center mt-16 mb-10">
        <Link to="/book" className="link link-hover text-blue-500">
          ← กลับไปหน้ารวมหนังสือ
        </Link>
      </div>
    </div>
  );
}
