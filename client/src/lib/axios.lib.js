import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://portfolio-yboi.onrender.com/api", 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

