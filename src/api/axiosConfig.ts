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
  (response) => response,
  (error) => {
    if (!error.response) {
      const networkErrorMessage = error.request
        ? "Network Error: The request was made but no response was received"
        : "Network Error: Something went wrong in setting up the request";

      return Promise.reject(new Error(networkErrorMessage));
    }
    if (axios.isAxiosError(error)) {
      const serverError: ServerError = {
        message: error.response.data.message || "An error occurred",
        error: error.response.data.error || error.response.statusText,
      };
      return Promise.reject(serverError);
    }
    return Promise.reject(new Error("An unexpected error occurred"));
  }
);

export default api;
