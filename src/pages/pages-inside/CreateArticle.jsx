import React, { useState } from "react";
import useArticleStore from "../../../store/articleStore";
import useAuthStore from "../../../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreateArticle() {
  const createArticle = useArticleStore((state) => state.createArticle);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    header: "",
    detail: "",
    category: "",
  });

  const hdlChange = (e) => {
    setForm((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const hdlFileChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    console.log(form);
  };

  const hdlCreateArticle = async (e) => {
    try {
      const body = new FormData();
      body.append("header", form.header);
      body.append("detail", form.detail);
      if (file) {
        body.append("link", file);
      }
      await createArticle(body, token);
      navigate("/article");

      toast.success("create article");
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
          placeholder="Please add header here..."
          className="input input-bordered  w-1/2 max-w-xs"
          onChange={hdlChange}
        />
        {form.header && form.detail && file ? (
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
        <textarea
          placeholder="เนื้อหาบทความ Article Details"
          name="detail"
          onChange={hdlChange}
          className="textarea textarea-bordered textarea-lg w-full max-w-[1000px] border "
          rows={10}
        />
      </div>
    </div>
  );
}
