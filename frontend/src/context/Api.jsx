import axios from "axios";
export const Api = axios.create({
  baseURL: "https://udemy-k17u.onrender.com/",
  withCredentials: true,
});
