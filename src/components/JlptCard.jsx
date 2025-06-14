import React, { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import axios from "axios";

function JlptCard({ item }) {
  return (
    <div className="p-4 md:p-0 w-full ">
      <div className="flex flex-col h-[100%] card card-compact bg-base-100 shadow-xl">
        <figure className="overflow-hidden">
          <img
            src={item.jlptThumbnail}
            alt={item.level}
            className="w-full h-full object-fill"
          />
        </figure>
        <div className="card-body flex flex-col bg-gray-100 flex-1">
          <div className="flex-1">
            <h2 className="card-title text-[32px]  sm:text-xl mb-2 text-black">
              {item.level}
            </h2>
            <div className=" mb-4">
              <p className="text-[18px] sm:text-base line-clamp-2 mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          </div>

          <div className="card-actions justify-center  items-center">
            <div>
              <Link
                to={"/jlpttest/details/" + item.level}
                className="btn btn-primary text-[16px] sm:text-base font-kanit text-white"
              >
                อ่านเพิ่มเติม
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JlptCard;
