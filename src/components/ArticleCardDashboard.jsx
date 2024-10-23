import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import useAuthStore from "../../store/authStore";

export default function ArticleCardDashboard({ item,onDelete }) {
  const [article,setArticle] = useState([])
  const token = useAuthStore((state) => state.token);

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={item.articleThumbnailLink}
            alt="article"
            className="w-[380px] h-[380px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.articleName}</h2>
          <p>{item.articleDetails.slice(0, 25)}</p>
          <div className="card-actions justify-between flex">
            <div className="flex gap-5">
              <button
                onClick={onDelete}
                className="btn btn-outline btn-error font-noto-sans-jp"
              >
                Delete
              </button>
              <Link
                to={`/article/edit/`+item.id}
                className="btn btn-outline btn-success font-noto-sans-jp px-5"
              >
                Edit
              </Link>
            </div>
            <Link
              to={"/article/" + item.id}
              className="btn btn-primary font-noto-sans-jp"
            >
              さらに詳しく
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
