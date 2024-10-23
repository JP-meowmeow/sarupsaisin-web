import React, { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import axios from "axios";

function CourseCard({item}) {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="./src/images/course/JLPT N5.png"
            alt="article"
            className="w-[380px] h-[380px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.courseName}</h2>
          <p>
            {item.shortDescription.slice(0,30)}
          </p>
          
          <div className="card-actions justify-end">
            <div>

          <h2 className="card-title justify-end pb-1">
            {item.isFree ==="FREE" ?item.isFree :item.price + ' บาท'}  </h2>
            <Link
              to={"/course/"+item.id}
              className="btn btn-primary font-noto-sans-jp"
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

export default CourseCard;
