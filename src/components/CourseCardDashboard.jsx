import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import useAuthStore from "../../store/authStore";

export default function CourseCardDashboard({ item,onDelete}) {
  const [course,setCourse] = useState([])
  const token = useAuthStore((state) => state.token);
  const role = useAuthStore((state) => state.role);

  

  return (
    <div className="font-kanit"> 
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={item.courseThumbnailLink}
            alt="course"
            className="w-[380px] h-[380px]"
          />
        </figure>
        <div className="card-body font-kanit">
          <h2 className="card-title">{item.courseName}</h2>
          <p>{item.shortDescription.slice(0,30)}</p>
          <span><h2 className="card-title justify-end pb-1">
            {item.isFree ==="FREE" ?item.isFree :item.price + " บาท"}  </h2></span>
          <div className="card-actions justify-between flex">
           
              {
                role ==="ADMIN" 
                ?( <div className="flex gap-5">
                  <button
                    onClick={onDelete}
                    className="btn btn-outline btn-error font-noto-sans-jp"
                  >
                    Delete
                  </button>
                  
                  <Link
                    to={`/course/edit/`+item.id}
                    className="btn btn-outline btn-success font-noto-sans-jp px-5"
                  >
                    Edit
                  </Link>
                </div>)
                :(
                  <div></div>
                )
              }
              
            <Link
              to={"/course/" + item.id}
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
