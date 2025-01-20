import axios from "axios";
export const Api = axios.create({
  baseURL: "https://udemy-1-bd7n.onrender.com",
  withCredentials: true,
});
