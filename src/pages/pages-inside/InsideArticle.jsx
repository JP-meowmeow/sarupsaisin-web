import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../../store/authStore";
// import FavoriteButton from "../../components/FavoriteButton";

export default function InsideArticle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [latestArticle, setLatestArticle] = useState([]);
  const token = useAuthStore((state) => state.token);
  
  const URL = import.meta.env.VITE_API_URL;

  const getArticle = async (id) => {
    const response = await axios.get(
      // "http://localhost:8000/article/getarticle/" + id,
      `${URL}/article/getarticle/` + id,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setData(response.data);
  };

  const getLatestArticle = async () => {
    const response = await axios.get(
      // "http://localhost:8000/article/getlatestarticle"
      `${URL}/article/getlatestarticle`
    );
    setLatestArticle(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getArticle(id);
    getLatestArticle();
  }, [id]);

  const formattedDate = data.createdDate
    ? new Date(data.createdDate).toLocaleDateString()
    : "";

  const articleFormattedDate = latestArticle.createdDate
    ? new Date(latestArticle.createdDate).toLocaleDateString()
    : "";

  return (
    <div className="mx-24 mt-16 pt-16 py-24 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div className="mx-16 flex justify-between -mb-5">
        <h1 className="text-2xl font-bold font-kanit ">{data.articleName}</h1>
        <h1>
          {" "}
          created at <span className="text-xl">{formattedDate}</span>
        </h1>
      </div>
      <div className="divider mx-"></div>
      <div className="flex justify-between mx-20">
        <div className="w-[60%]">
          <img
            src={data.articleThumbnailLink}
            alt=""
            className="w-[600px] mx-10"
          />
          <h1 className="mt-8 mb-8 mx-10">{data.articleDetails}</h1>
        </div>
        <div className="w-[320px]">
          <div className="w-full  ">
            <div className="bg-gray-100 p-3 pb-1 rounded-lg mb-6">
              <div className="flex items-center mb-4 mr-2">
                <span className="material-icons p-3"></span>
                <input
                  type="text"
                  placeholder="ค้นหาบทความ"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
            <hr />
            <h2 className="text-2xl font-bold mb-4 mt-4">บทความล่าสุด</h2>

            {latestArticle.map((item) => (
              <div key={item.id} className="mb-3">
                <Link to={"/article/" + item.id}>
                  <img
                    src={item.articleThumbnailLink}
                    alt=""
                    className="bg-pink-100  w-full mb-2 cursor-pointer"
                  />
                </Link>
                <h3 className="font-bold mb-1">{item.articleName}</h3>
                <span>Created at</span>
                <span className="text-gray-500 text-sm">
                  {" "}
                  {item.createdDate.slice(0, 10)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
