import { AxiosResponse } from "axios";
import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { User } from "models";

export const authdUser = () =>
  apiClient
    .get(ENDPOINT.AUTHD_USER)
    .then((_res: AxiosResponse<User>) => _res.data);
