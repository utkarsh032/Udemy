import axios from "axios";
export const Api = axios.create({
  baseURL: "https://udemy-n59k.onrender.com",
  withCredentials: true,
});
