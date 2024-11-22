import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

export default function ArticleCardDashboard({ item, onDelete }) {
  const [article, setArticle] = useState([]);
  const token = useAuthStore((state) => state.token);

  return (
    <div className="p-4 md:p-0 w-full">
      <div className="flex flex-col h-[100%] card card-compact bg-base-100 w-full shadow-xl">
        <figure className="overflow-hidden">
          <img
            src={item.articleThumbnailLink}
            alt="article"
            className="w-full h-1080 object-fill"
          />
        </figure>
        <div className="card-body flex flex-col flex-1">
          <h2 className="line-clamp-2 card-title text-[32px] sm:text-xl mb-2">{item.articleName}</h2>
          <p className="line-clamp-2">{item.articleDetails}</p>
          <div className="card-actions justify-between flex">
            <div className="flex gap-5">
              <button
                onClick={onDelete}
                className="btn btn-outline btn-error font-noto-sans-jp"
              >
                Delete
              </button>
              <Link
                to={`/article/edit/` + item.id}
                className="btn btn-outline btn-success font-noto-sans-jp px-5"
              >
                Edit
              </Link>
            </div>
            <Link
              to={"/article/" + item.id}
              className="btn btn-primary text-[16px] sm:text-base font-noto-sans-jp"
            >
              さらに詳しく
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}