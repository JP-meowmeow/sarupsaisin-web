import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ item }) {

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
          <div className="card-actions justify-end">
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
