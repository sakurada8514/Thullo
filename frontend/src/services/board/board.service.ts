import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { Board, BoardCreateRequest } from "models/board";
import { replaceUrlParam } from "utils/string/url";

type CreateBoardResponse = Pick<Board, "id">;
export const createBoard = (
  requestBody: BoardCreateRequest
): Promise<CreateBoardResponse> =>
  apiClient.post(ENDPOINT.BOARD_CREATE, requestBody).then((_res) => _res.data);

export const fetchMyBoardList = (): Promise<Board[]> =>
  apiClient
    .get(ENDPOINT.FETCH_MY_BOARD_LIST)
    .then((_res) => _res.data.boardList);

export const fetchPublicBoardList = (): Promise<Board[]> =>
  apiClient
    .get(ENDPOINT.FETCH_PUBLIC_BOARD_LIST)
    .then((_res) => _res.data.boardList);

export const fetchBoardDetail = (_: string, id: string): Promise<Board> => {
  console.log(replaceUrlParam(ENDPOINT.FETCH_BOARD_DETAIL, { id }));

  return apiClient
    .get(replaceUrlParam(ENDPOINT.FETCH_BOARD_DETAIL, { id }))
    .then((_res) => _res.data.board);
};
