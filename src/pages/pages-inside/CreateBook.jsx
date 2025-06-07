import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthStore from "../../../store/authStore";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export default function CreateBook() {
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bookTitle: "",
    shortDescription: "",
    longDescription: "",
    price: "",
  });

  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  const [sampleFiles, setSampleFiles] = useState([]);
  const [samplePreviews, setSamplePreviews] = useState([]);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCover = (e) => {
    const file = e.target.files[0];
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const handleSamplePages = (e) => {
    const files = Array.from(e.target.files);
    setSampleFiles(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setSamplePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("bookTitle", formData.bookTitle);
    form.append("shortDescription", formData.shortDescription);
    form.append("longDescription", formData.longDescription);
    form.append("price", formData.price);
    if (coverFile) form.append("link", coverFile);
    sampleFiles.forEach((file) => {
      form.append("samplePages", file); // name = samplePages[]
    });

    try {
      await axios.post(`${URL}/book/createbook`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("สร้างหนังสือเรียบร้อยแล้ว");
      navigate("/book");
    } catch (err) {
      setError(err.response?.data?.message || "เกิดข้อผิดพลาด");
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 py-24 bg-[#FCFBF8] font-kanit">
      <h2 className="text-2xl font-bold text-center mb-8">สร้างหนังสือใหม่</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label className="block mb-1">ชื่อหนังสือ</label>
          <input
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">คำโปรยสั้น ๆ</label>
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">รายละเอียด</label>
          <textarea
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            className="textarea textarea-bordered w-full min-h-[120px]"
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1">ราคา (บาท)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">ภาพหน้าปก</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCover}
            className="file-input file-input-bordered w-full"
            required
          />
          {coverPreview && (
            <img
              src={coverPreview}
              alt="preview"
              className="mt-4 w-48 rounded shadow-sm border"
            />
          )}
        </div>

        <div>
          <label className="block mb-1">ตัวอย่างหน้าในหนังสือ (อัปโหลดได้หลายรูป)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleSamplePages}
            className="file-input file-input-bordered w-full"
          />
          {samplePreviews.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {samplePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`page ${index + 1}`}
                  className="rounded border shadow"
                />
              ))}
            </div>
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button className="btn btn-primary w-full">สร้างหนังสือ</button>
      </form>
    </div>
  );
}
