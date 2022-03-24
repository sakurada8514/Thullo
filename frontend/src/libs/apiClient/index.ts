import axios from "axios";
import { BASE_URL } from "config/api";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
