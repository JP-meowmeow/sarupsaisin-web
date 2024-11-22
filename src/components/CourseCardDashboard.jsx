import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

export default function CourseCardDashboard({ item, onDelete }) {
  const [course, setCourse] = useState([]);
  const token = useAuthStore((state) => state.token);
  const role = useAuthStore((state) => state.role);

  return (
    <div className="p-4 md:p-0 w-full font-kanit">
      <div className="flex flex-col h-[100%] card card-compact bg-base-100 shadow-xl">
        <figure className="overflow-hidden">
          <img
            src={item.courseThumbnailLink}
            alt="course"
            className="w-full h-full object-fill"
          />
        </figure>
        <div className="card-body flex flex-col flex-1">
          <div className="flex-1">
            <h2 className="card-title text-[32px] sm:text-xl mb-2">{item.courseName}</h2>
            <div className="mb-4">
              <p className="text-[18px] sm:text-base line-clamp-2 mt-2">
                {item.shortDescription.slice(0, 30)}
              </p>
            </div>
          </div>

          <div className="card-actions justify-between items-center">
            {role === "ADMIN" ? (
              <div className="flex gap-5">
                <button
                  onClick={onDelete}
                  className="btn btn-outline btn-error font-noto-sans-jp"
                >
                  Delete
                </button>
                <Link
                  to={`/course/edit/` + item.id}
                  className="btn btn-outline btn-success font-noto-sans-jp px-5"
                >
                  Edit
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            <div className="">
              <h2 className="card-title text-[24px] lg:text-2xl justify-center lg:justify-end items-center pb-1">
                {item.isFree === "FREE" ? item.isFree : item.price + " บาท"}
              </h2>
              <Link
                to={"/course/" + item.id}
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