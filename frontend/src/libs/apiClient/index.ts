import axios from "axios";
import { BASE_URL } from "../../config/api";

export const apiClient = () => {
  const client = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
    }
  );
  return client;
};
