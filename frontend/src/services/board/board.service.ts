import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { Board, BoardCreateRequest } from "models/board";

type CreateBoardResponse = Pick<Board, "id">;
export const createBoard = (
  requestBody: BoardCreateRequest
): Promise<CreateBoardResponse> =>
  apiClient.post(ENDPOINT.BOARD_CREATE, requestBody).then((_res) => _res.data);
