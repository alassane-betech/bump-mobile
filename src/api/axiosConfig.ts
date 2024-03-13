import { ServerError } from "@src/types/ServerResponseTypes";
import axios from "axios";

const API_URL = "http://localhost:3000/api";
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error) && error.response?.data) {
      const serverError: ServerError = {
        message: error.response?.data.message,
        error: error.response?.data.error,
      };
      return Promise.reject(serverError);
    }
    return Promise.reject(new Error("An unexpected error occurred"));
  }
);

export default api;
