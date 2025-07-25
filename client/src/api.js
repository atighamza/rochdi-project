import axios from "axios";

const api = axios.create({
  baseURL: "https://rochdi-project-back.onrender.com/api", // adjust this if your backend URL/port differs
});

// Automatically attach the token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
