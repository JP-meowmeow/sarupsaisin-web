import React, { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import axios from "axios";

function JlptCard({item}) {

  return (
    <div className="p-4 md:p-0 w-full ">
      <div className="flex flex-col h-[100%] card card-compact bg-base-100 shadow-xl">
        <figure className="overflow-hidden">
          <img
            src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1733926554/1080_px_x_1080_px_allavg.png"
            alt={"Jlpt" + "N"+item.id} 
            className="w-full h-full object-fill"
          />
        </figure>
          <div className="card-body flex flex-col flex-1">
          <div className="flex-1">
            <h2 className="card-title text-[32px]  sm:text-xl mb-2">{item.name}</h2>
            <div className=" mb-4">
              <p className="text-[18px] sm:text-base line-clamp-2 mt-2">
              {item.details}
              </p>
            </div>
          </div>
          
          <div className="card-actions justify-center  items-center">
            <div>
            <Link
              to={"/jlpt/"+item.id}
              className="btn btn-primary text-[16px] sm:text-base font-noto-sans-jp"
              >
              さらに詳しく
            </Link>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JlptCard;
