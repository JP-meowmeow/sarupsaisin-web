import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ item }) {

  return (
    <div className="p-4 md:p-0 w-full ">
      <div className="flex flex-col h-[100%] card card-compact bg-base-100 w-full shadow-xl">
        <figure className="overflow-hidden">
          <img
            src={item.articleThumbnailLink}
            alt="article"
            className="w-full h-1080 object-fill"
          />
        </figure>
        <div className="card-body flex flex-col flex-1">
          <h2 className="line-clamp-2 card-title text-[32px]  sm:text-xl mb-2">{item.articleName}</h2>
          <p className="line-clamp-2">{item.articleDetails}</p>
          <div className="card-actions justify-center ">
            <Link
              to={"/article/" + item.id}
              className="btn btn-primary text-[16px] sm:text-[12px] sm:text-base font-noto-sans-jp w-2/4"
            >
              さらに詳しく
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
