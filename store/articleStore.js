import axios from "axios";
import { create } from "zustand";
const URL = import.meta.env.VITE_API_URL;

const useArticleStore = create((set, get) => ({
  createArticle: async (body, token) => {
    try {
      const response = await axios.post(
        // "http://localhost:8000/article/uploadimage",
        `${URL}/article/uploadimage`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
  },

  updateArticle: async (body, token, id) => {
    try {
      const response = await axios.patch(
        // `http://localhost:8000/article/updatearticle/${id}`,
        `${URL}/article/updatearticle/${id}`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data
    } catch (err) {
      console.log(err);
      throw err
    }
  },
}));

export default useArticleStore;
