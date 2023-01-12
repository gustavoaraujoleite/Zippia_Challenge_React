/**
 * Component responsible for rendering the BaseURL for API fetching
 */

import axios from "axios";

const api = axios.create({
  baseURL: "https://www.zippia.com",
});

export default api;
