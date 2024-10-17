import axios from "axios";
import { create } from "zustand";

const useArticleStore = create((set, get) => ({
  createArticle: async (body, token) => {
    try {
      const response = await axios.post("http://localhost:8000/article/uploadimage", body, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useArticleStore
