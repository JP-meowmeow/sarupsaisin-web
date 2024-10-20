import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import useAuthStore from "../../store/authStore";

export default function CourseCardDashboard({ item }) {
  const [course,setCourse] = useState([])
  const token = useAuthStore((state) => state.token);

  const hdlDelete = async () => {
    const response = await axios.delete(
      `http://localhost:8000/course/deletecourse/${item.id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setCourse(response)
  };

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
          <span><h2 className="card-title justify-end pb-1">{
            item.price} บาท </h2></span>
          <div className="card-actions justify-between flex">
            <div className="flex gap-5">
              
              <button
                onClick={hdlDelete}
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
            </div>
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
