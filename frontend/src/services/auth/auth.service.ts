import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { UserSignUpRequest } from "models";

export const signUp = (requestBody: UserSignUpRequest): Promise<void> =>
  apiClient
    .post(ENDPOINT.SIGN_UP, requestBody)
    .then((_res) => _res)
    .catch((e) => e);
