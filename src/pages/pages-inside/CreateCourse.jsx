import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreateCourse() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    courseName: "",
    detail: "",
  });

  const hdlFileChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    console.log(form);
  };

  const hdlChange = (e) => {
    setForm((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const hdlCreateCourse = async (e) => {
    try {
      const body = new FormData();
      body.append("courseName", form.courseName);
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
        <span>Course name : </span>
        <input
          type="text"
          name="header"
          placeholder="Please add course name here..."
          className="input input-bordered  w-1/2 max-w-xs"
          onChange={hdlChange}
        />
        {form.header && form.detail && file ? (
          <button className="btn" onClick={hdlCreateCourse}>
            Submit Course
          </button>
        ) : (
          <button className="btn" onClick={hdlCreateCourse} disabled>
            Submit Course
          </button>
        )}
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
            src="https://www.svgrepo.com/show/509190/picture.svg"
            alt=""
            className="w-[300px]  m-auto"
          />
        )}
      </div>
    </div>
    
  );
}

export default CreateCourse;
