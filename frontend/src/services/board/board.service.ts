import { AxiosResponse } from "axios";
import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { BoardCreateRequest } from "models/board";
import { SuccessResponse } from "types/api";

export const createBoard = (requestBody: BoardCreateRequest) =>
  apiClient.post(ENDPOINT.SIGN_IN, requestBody).then((_res) => _res.data);
