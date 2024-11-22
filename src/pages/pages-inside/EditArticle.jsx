import React, { useState, useEffect } from "react";
import useArticleStore from "../../../store/articleStore";
import useAuthStore from "../../../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

export default function EditArticle() {
  const { id } = useParams();
  const updateArticle = useArticleStore((state) => state.updateArticle);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [articleContent, setArticleContent] = useState(null);
  const [form, setForm] = useState({
    header: "",
    detail: "",
    articleThumbnailLink: "",
  });

  // get data from database
  {
    useEffect(() => {
      getArticle(id);
    }, [id]);
  }

  async function getArticle(id) {
    try {
      const response = await axios.get(
        // `http://localhost:8000/article/getarticle/edit/${id}`,
        `${URL}/article/getarticle/edit/${id}`,
        {headers :{Authorization : `Bearer ${token}`}}
      );
      setArticleContent(response.data);

      console.log(articleContent);

      setForm({
        header: response.data.articleName || "",
        detail: response.data.articleDetails || "",
        articleThumbnailLink: response.data.articleThumbnailLink || "",
      });
    } catch (err) {
      console.log(err);
      toast.error("something worngg");
    }
  }

  const hdlChange = (e) => {
    setForm((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const hdlFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const hdlUpdateArticle = async (e) => {
    try {
      const body = new FormData();
      body.append("header", form.header);
      body.append("detail", form.detail);
      if (file) {
        body.append("link", file);
      } else {
        body.append("link", form.articleThumbnailLink);
      }
      await updateArticle(body, token, id);
      navigate("/userinfo");

      toast.success("Article updated successfully");
    } catch (err) {
      const errMessage = err.response?.data?.error || err.message;
      console.log(errMessage);
      toast.error(errMessage);
    }
  };

  return (
    <div className="m-16 pt-10 font-kanit">
      <header className="flex items-center gap-5 mb-5">
        <span>Header : </span>
        <input
          type="text"
          name="header"
          value={form.header}
          placeholder="Please add header here..."
          className="input input-bordered  w-1/2 max-w-xs"
          onChange={hdlChange}
        />

        <button className="btn" onClick={hdlUpdateArticle}>
          Submit Article
        </button>
      </header>

      <input type="file" onChange={hdlFileChange} />
      <div className="divider"></div>
      <div className="m-auto w-[300px] mt-10 bg-gray-100 ">
        {file ? (
          file && (
            <img
              src={URL.createObjectURL(file)}
              className="w-[300px]  m-auto mt-10 bg-gray-100 "
            />
          )
        ) : (
          <img
            src={form.articleThumbnailLink}
            alt=""
            className="w-[300px]  m-auto"
          />
        )}
      </div>
      <div className="flex justify-center mt-10 w-full">
        <textarea
          placeholder="เนื้อหาบทความ Article Details"
          value={form.detail}
          name="detail"
          onChange={hdlChange}
          className="textarea textarea-bordered textarea-lg w-full max-w-[1000px] border "
          rows={10}
        />
      </div>
    </div>
  );
}
