import axios, { AxiosError } from "axios";
import { BASE_URL } from "config/api";
import { MESSAGE } from "config/error/message";
import { flashActions } from "globalState/flash";
import { useEffect } from "react";
import { ErrorResponse } from "types/api";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
export const useErrorHandler = () => {
  const setFlash = flashActions.setFlash();
  const errorInterceptor = apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponse>) => {
      console.error("interceptors", error);

      switch (error.response?.status) {
        case 400:
        case 401:
          return Promise.reject<ErrorResponse>(error.response?.data);
        case 403:
          window.location.href = "/signin";
          return false;
        case 500:
          setFlash("error", MESSAGE.serverError);
          return false;
        default:
          return Promise.reject<ErrorResponse>(error.response?.data);
      }
    }
  );
  useEffect(() => () => {
    axios.interceptors.response.eject(errorInterceptor);
  });
};
