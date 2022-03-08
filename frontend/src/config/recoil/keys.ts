export const RECOIL_ATOM_KEYS = {
  USER_STATE: "UserState",
  ERROR_STATE: "ErrorState",
} as const;
export type RecoilAtomKeys =
  typeof RECOIL_ATOM_KEYS[keyof typeof RECOIL_ATOM_KEYS];

export const RECOIL_SELECTOR_KEYS = {
  USER_USER_ID: "User_UserId",
  USER_USER_INFO: "User_UserInfo",
  USER_IS_AUTHD: "User_IsAuthd",
  ERROR_MESSAGE: "Error_ErrorMessage",
  ERROR_HAS_ERROR: "Error_HasError",
} as const;
export type RecoilSelectorKeys =
  typeof RECOIL_SELECTOR_KEYS[keyof typeof RECOIL_SELECTOR_KEYS];
