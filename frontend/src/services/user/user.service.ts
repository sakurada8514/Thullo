import { AxiosResponse } from "axios";
import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { User } from "models";

export const authdUser = (): Promise<User> =>
  apiClient
    .get(ENDPOINT.AUTHD_USER)
    .then((_res: AxiosResponse<User>) => _res.data)
    .catch(() => {
      console.log("serviceerror");
      throw new Error();
    });
