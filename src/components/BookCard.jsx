import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="p-4 md:p-0 w-full ">

    <div key={book.id} className="flex flex-col h-[100%] card card-compact bg-white shadow-xl">
      <figure className="overflow-hidden p-5">
        <img
          src={book.bookThumbnailLink}
          alt={book.bookTitle}
          className="rounded-xl object-contain max-h-[300px]"
          />
      </figure>
      <div className="card-body items-center text-center bg-gray-100">
        <h2 className="card-title text-xl sm:text-lg mb-2 text-black">{book.bookTitle}</h2>
        <p className="text-gray-600 line-clamp-2">{book.shortDescription}</p>
        <p className="text-xl font-bold mt-2 text-pink-600">{book.price} บาท</p>
        <Link
          to={`/book/${book.id}`}
          className="btn btn-primary text-white w-full mt-3 font-noto-sans-jp"
        >
          詳しく見る
        </Link>
      </div>
          </div>
    </div>
  );
}

export default BookCard;
