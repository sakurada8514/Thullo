import { AxiosResponse } from "axios";
import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { UserSignInRequest, UserSignUpRequest } from "models";
import { SuccessResponse } from "types/api/response";

export const signUp = (requestBody: UserSignUpRequest): Promise<void> =>
  apiClient.post(ENDPOINT.SIGN_UP, requestBody).then(() => {});

export const signIn = (requestBody: UserSignInRequest): Promise<void> =>
  apiClient.post(ENDPOINT.SIGN_IN, requestBody).then((_res) => {});

export const fetchSignInUser = () =>
  apiClient.get(ENDPOINT.SIGN_IN_USER).then((_res) => _res.data);
