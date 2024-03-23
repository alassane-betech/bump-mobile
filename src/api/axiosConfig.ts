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
    const { response, request } = error;

    if (!response) {
      const networkErrorMessage = request
        ? "Network Error: The request was made but no response was received"
        : "Network Error: Something went wrong in setting up the request";

      return Promise.reject(new Error(networkErrorMessage));
    }

    const { data, statusText } = response;
    const errorMessage = data.message || "An error occurred";
    const errorDetails = data.error || statusText;
    const serverError: ServerError = {
      message: errorMessage,
      error: errorDetails,
    };

    return Promise.reject(serverError);
  }
);

export default api;
