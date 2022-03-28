import { AxiosResponse } from "axios";
import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { UserSignInRequest, UserSignUpRequest } from "models";
import { useNavigate } from "react-router-dom";
import { SuccessResponse } from "types/api/response";

export const signUp = (
  requestBody: UserSignUpRequest
): Promise<SuccessResponse> =>
  apiClient.post(ENDPOINT.SIGN_UP, requestBody).then(() =>
    apiClient
      .post(
        ENDPOINT.SIGN_IN,
        encodeURI(
          `email=${requestBody.email}&password=${requestBody.password}`
        ),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((_res: AxiosResponse<SuccessResponse>) => _res.data)
  );

export const signIn = (
  requestBody: UserSignInRequest
): Promise<SuccessResponse> =>
  apiClient
    .post(
      ENDPOINT.SIGN_IN,
      encodeURI(`email=${requestBody.email}&password=${requestBody.password}`),
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((_res: AxiosResponse<SuccessResponse>) => _res.data);
