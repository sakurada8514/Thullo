const API_VERSION = "v1";
export const ENDPOINT = {
  SIGN_IN: "/auth/sign_in",
  SIGN_IN_USER: `/api/${API_VERSION}/sign_in_user`,
  SIGN_UP: "/auth",
  BOARD_CREATE: "/board/create",
  FETCH_MY_BOARD_LIST: "/board/list/my",
  FETCH_PUBLIC_BOARD_LIST: "/board/list/public",
  FETCH_BOARD_DETAIL: "/board/:id",
};
