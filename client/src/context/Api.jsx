import axios from "axios";
export const Api = axios.create({
  baseURL: "https://udemy-j08o.onrender.com", 
  withCredentials: true,
});
