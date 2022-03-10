export const RECOIL_ATOM_KEYS = {
  USER_STATE: "UserState",
  FLASH_STATE: "FlashState",
} as const;
export type RecoilAtomKeys =
  typeof RECOIL_ATOM_KEYS[keyof typeof RECOIL_ATOM_KEYS];

export const RECOIL_SELECTOR_KEYS = {
  USER_USER_ID: "User_UserId",
  USER_USER_INFO: "User_UserInfo",
  USER_IS_AUTHD: "User_IsAuthd",
  FLASH_FLASH_INFO: "Flash_FlashInfo",
} as const;
export type RecoilSelectorKeys =
  typeof RECOIL_SELECTOR_KEYS[keyof typeof RECOIL_SELECTOR_KEYS];
