import axios from "axios";

const api = axios.create({
  baseURL: "https://www.zippia.com",
});

export default api;
