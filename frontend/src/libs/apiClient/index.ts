import axios from "axios";
import { BASE_URL } from "config/api";
import { toSignInPage } from "utils/route";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("interceptors", error);

    switch (error.response?.status) {
      case 401:
        return Promise.reject(error);
      case 403:
        toSignInPage();
        return false;
      default:
        return false;
    }
  }
);
