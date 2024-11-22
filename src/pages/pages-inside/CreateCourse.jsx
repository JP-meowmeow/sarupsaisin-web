import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthStore from "../../../store/authStore";
import useCourseStore from "../../../store/courseStore";
import Spinner from "../../components/Spinner";

function CreateCourse() {
  const token = useAuthStore((state) => state.token);
  const createCourse = useCourseStore((state) => state.createCourse);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    courseName: "",
    shortDescription: "",
    longDescription: "",
    category: "",
    price: "",
    isFree: "",
  });

  const [units, setUnits] = useState([
    { unitNumber: 1, title: "", description: "", youtubeLink: "" },
  ]);

  const hdlFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const hdlChange = (e) => {
    setForm((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const hdlUnitChange = (index, e) => {
    const { name, value } = e.target;
    const newUnits = [...units];
    newUnits[index] = { ...newUnits[index], [name]: value };
    setUnits(newUnits);
  };

  const addUnit = () => {
    setUnits([
      ...units,
      {
        unitNumber: units.length + 1,
        title: "",
        description: "",
        youtubeLink: "",
      },
    ]);
  };

  const removeUnit = (index) => {
    const newUnits = units.filter((_, i) => i !== index);
    const updatedUnits = newUnits.map((unit, i) => ({
      ...unit,
      unitNumber: i + 1, 
    }));

    setUnits(updatedUnits);
  };

  const hdlCreateCourse = async (e) => {
    try {
      setIsLoading(true);
      const body = new FormData();
      body.append("courseName", form.courseName);
      body.append("shortDescription", form.shortDescription);
      body.append("longDescription", form.longDescription);
      body.append("price", form.price);
      body.append("category", form.category);
      body.append("units", JSON.stringify(units));
      body.append("isFree", form.isFree);
      if (file) {
        body.append("link", file);
      }

      await createCourse(body, token);
      setIsLoading(false);
      toast.success("Course created successfully");
      navigate("/course");
    } catch (err) {
      const errMessage = err.response?.data?.error || err.message;
      console.log(errMessage);
      toast.error(errMessage);
    }
  };
  return (
    <div className="m-16 pt-10 font-kanit">
      <h1 className="text-2xl font-bold font-kanit mb-4">
        ข้อมูลคอร์ส{" "}
        <span className="font-noto-sans-jp text-2xl">コース内容</span>
      </h1>
      <header className=" items-center gap-5 mb-5">
        <div>
          <div className="mb-5">
            <span>Course name : </span>
            <input
              type="text"
              name="courseName"
              placeholder="Please add course name here..."
              className="input input-bordered   w-1/2 max-w-xs"
              onChange={hdlChange}
            />
            <span className="ml-3">Course price : </span>
            <input
              type="text"
              name="price"
              placeholder="Please add course price here..."
              className="input input-bordered  w-[20%] max-w-xs"
              onChange={hdlChange}
            />
          </div>
          <div className="flex gap-5">
            <div>
              <span>Course description : </span>

              <input
                type="text"
                name="shortDescription"
                placeholder="Please add course short description here..."
                className="input input-bordered  w-[350px] max-w-96"
                onChange={hdlChange}
              />
            </div>
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
            <select
              name="isFree"
              className="select select-bordered w-[150px] max-w-xs"
              onChange={hdlChange}
            >
              <option disabled selected>
                Free Course?
              </option>
              <option value="FREE">FREE</option>
              <option value="NOTFREE">NOTFREE</option>
            </select>
          </div>
        </div>
      </header>

      <input type="file" onChange={hdlFileChange} />
      {isLoading ? (
        <Spinner />
      ) : form.courseName &&
        form.price &&
        form.shortDescription &&
        form.longDescription &&
        file ? (
        <button className="btn" onClick={hdlCreateCourse}>
          Submit Course
        </button>
      ) : (
        <button className="btn" disabled>
          Submit Course
        </button>
      )}

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
          placeholder="รายละเอียดคอร์ส course details"
          name="longDescription"
          onChange={hdlChange}
          className="textarea textarea-bordered textarea-lg w-full max-w-[1000px] border "
          rows={10}
        />
      </div>

      <div className="divider"></div>

      {/* Create Unit part */}
      <h1 className="text-2xl font-bold font-kanit mb-4">
        บทเรียน <span className="font-noto-sans-jp text-2xl">ユニット</span>
      </h1>
      <div className="font-kanit">
        <div className="flex  gap-5 items-center">
          <button
            type="button"
            onClick={addUnit}
            className="btn btn-secondary "
          >
            Add Unit
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Course Units</h3>
          {units.map((unit, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h4 className="text-lg font-semibold">Unit {unit.unitNumber}</h4>
              <input
                type="text"
                name="title"
                value={unit.title}
                onChange={(e) => hdlUnitChange(index, e)}
                placeholder="Unit Title"
                className="input input-bordered w-full mt-2"
              />
              <input
                type="text"
                name="description"
                value={unit.description}
                onChange={(e) => hdlUnitChange(index, e)}
                placeholder="Unit Description"
                className="input input-bordered w-full mt-2"
              />
              <input
                type="text"
                name="youtubeLink"
                value={unit.youtubeLink}
                onChange={(e) => hdlUnitChange(index, e)}
                placeholder="YouTube Link"
                className="input input-bordered w-full mt-2"
              />
              {units.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeUnit(index)}
                  className="btn btn-error mt-2"
                >
                  Remove Unit
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
