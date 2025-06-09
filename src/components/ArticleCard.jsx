import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ item }) {
  return (
    <div className="p-4 md:p-0 w-full ">
      <div className="flex flex-col h-[100%] card card-compact bg-base-100  w-full shadow-xl">
        <figure className="relative w-full aspect-square overflow-hidden">
          <img
            src={item.articleThumbnailLink}
            alt="article"
            className="absolute inset-0 w-full h-full object-cover"
            // className="w-full max-w-[1080px] h-[500px] object-cover mx-auto"
          />
        </figure>
        <div className="card-body flex flex-col bg-gray-100 flex-1">
          <div className="flex-1">

          <h2 className="line-clamp-2 text-black card-title text-[16px]  sm:text-xl mb-2 text-center">
            {item.articleName}
          </h2>
          <div className=" mb-4">
              <p className="text-[18px] sm:text-base line-clamp-2 mt-2">
                
              </p>
            </div>
            </div>
          <div className="card-actions justify-center  items-center">
            <Link
              to={"/article/" + item.id}
              className="btn btn-primary text-[16px] sm:text-[12px] sm:text-base  w-2/4"
              >
              อ่านต่อ...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
