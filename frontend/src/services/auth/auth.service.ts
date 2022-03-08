import { AxiosResponse } from "axios";
import { ENDPOINT } from "config/api";
// eslint-disable-next-line import/no-cycle
import { apiClient } from "libs/apiClient";
import { UserSignInRequest, UserSignUpRequest } from "models";
import { useNavigate } from "react-router-dom";
import { ErrorResponse, SuccessResponse } from "types/api/response";

export const signUp = (
  requestBody: UserSignUpRequest
): Promise<SuccessResponse> =>
  apiClient.post(ENDPOINT.SIGN_UP, requestBody).then((_res) => _res.data);

export const signIn = (requestParam: UserSignInRequest) =>
  apiClient
    .post(
      ENDPOINT.SIGN_IN,
      encodeURI(
        `email=${requestParam.email}&password=${requestParam.password}`
      ),
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((_res: AxiosResponse<SuccessResponse>) => _res);

export const logout = () => {
  const navigate = useNavigate();
  navigate("/signin");
};
