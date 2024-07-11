import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://run.mocky.io/v3",
});
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
