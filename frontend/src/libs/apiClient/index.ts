import axios, { AxiosError } from "axios";
import { BASE_URL } from "config/api";
import { ErrorResponse } from "types/api";
import { toSignInPage } from "utils/route";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    console.error("interceptors", error);

    switch (error.response?.status) {
      case 401:
      case 400:
        return Promise.reject<ErrorResponse>(error.response?.data);
      case 403:
        toSignInPage();
        return Promise.reject<ErrorResponse>(error.response?.data);
      default:
        return Promise.reject<ErrorResponse>(error.response?.data);
    }
  }
);
