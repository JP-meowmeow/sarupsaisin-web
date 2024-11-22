import axios from "axios";
import { create } from "zustand";
const URL = import.meta.env.VITE_API_URL;

const useCourseStore = create((set, get) => ({
  createCourse: async (body, token) => {
    try {
      console.log('body',body)
      const response = await axios.post(
        // "http://localhost:8000/course/createcourse",
        `${URL}/course/createcourse`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
          'Content-Type': 'multipart/form-data'
        }
      );
    } catch (err) {
      console.log("error from course store", err);
    }
  },
}));

export default useCourseStore;
