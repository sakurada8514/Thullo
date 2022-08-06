const API_VERSION = "v1";
export const ENDPOINT = {
  SIGN_IN: "/auth/sign_in",
  SIGN_IN_USER: `/api/${API_VERSION}/sign_in_user`,
  SIGN_UP: "/auth",
  BOARD_CREATE: `/api/${API_VERSION}/boards`,
  FETCH_MY_BOARD_LIST: `/api/${API_VERSION}/boards`,
  FETCH_PUBLIC_BOARD_LIST: `/api/${API_VERSION}/boards/public`,
  FETCH_BOARD_DETAIL: `/api/${API_VERSION}/boards/:id`,
};
