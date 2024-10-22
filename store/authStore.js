import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create(
  // make local storage,so when user refresh the webpage data token will not disappear
  persist(
    (set, get) => ({
      user: null,
      token: "",
      role:'',
      login: async (form) => {
        try {
          const response = await axios.post("http://localhost:8000/auth/login", form);
          set({ token: response.data.token, user: response.data.user,role:response.data.role });
          return response
        } catch (err) {
          throw err
        }
      },
      logout: () => {
        set({ token: "", user: null,role:null });
      },
    }),
    {
      name: "auth-state",//create key and value 
      storage: createJSONStorage(() => localStorage), //config
    }
  )
);

export default useAuthStore;
