import axios from "axios";
import { create } from "zustand";
const URL = import.meta.env.VITE_API_URL;

const useBookStore = create((set, get) => ({
  createCourse: async (body, token) => {
    try {
      console.log('body',body)
      const response = await axios.post(
        `${URL}/book/createbook`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
          'Content-Type': 'multipart/form-data'
        }
      );
    } catch (err) {
      console.log("error from book store", err);
    }
  },
}));

export default useBookStore;
