import React, { useState } from "react";
import useArticleStore from "../../../store/articleStore";
import useAuthStore from "../../../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateArticle() {
  const createArticle = useArticleStore((state) => state.createArticle);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    header: "",
    detail: "",
    category: "",
  });

  const hdlChange = (e) => {
    setForm((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const hdlCreateArticle = async (e) => {
    try {
      setIsLoading(true);
      const body = new FormData();
      body.append("header", form.header);
      body.append("detail", form.detail);
      body.append("category", form.category);
      if (file) {
        body.append("link", file);
      }
      await createArticle(body, token);
      setIsLoading(false);
      navigate("/article");

      toast.success("create article");
    } catch (err) {
      const errMessage = err.response?.data?.error || err.message;
      console.log(errMessage);
      toast.error(errMessage);
    }
  };

  return (
    <div className="m-16 pt-10 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <header className="flex items-center gap-5 mb-5">
        <span>Header : </span>
        <input
          type="text"
          name="header"
          placeholder="Please add header here..."
          className="input input-bordered  w-1/2 max-w-xs"
          onChange={hdlChange}
        />
        {isLoading ? (
          <Spinner />
        ) : form.header && form.detail && file ? (
          <button className="btn" onClick={hdlCreateArticle}>
            Submit Article
          </button>
        ) : (
          <button className="btn" onClick={hdlCreateArticle} disabled>
            Submit Article
          </button>
        )}
      </header>

      <input type="file" onChange={hdlFileChange} />
      <select
        name="category"
        className="select select-bordered w-[150px] max-w-xs"
        onChange={hdlChange}
      >
        <option disabled selected>
          Category
        </option>
        <option value="JLPTN5">JLPT N5</option>
        <option value="JLPTN4">JLPT N4</option>
        <option value="JLPTN3">JLPT N3</option>
        <option value="OTHER">OTHER</option>
      </select>
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
            src="https://www.svgrepo.com/show/509190/picture.svg"
            alt=""
            className="w-[300px]  m-auto"
          />
        )}
      </div>
      <div className="flex justify-center mt-10 w-full">
        <ReactQuill
          theme="snow"
          value={form.detail}
          onChange={(value) => setForm((prev) => ({ ...prev, detail: value }))}
          className="bg-white w-full max-w-[1000px] mx-auto"
        />
      </div>
    </div>
  );
}
