import { RECOIL_ATOM_KEYS, RECOIL_SELECTOR_KEYS } from "config/recoil";
import { User } from "models";
import { useCallback } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

interface UserState {
  id: number;
  name: string;
  icon?: string;
  isAuthd: boolean;
}
const initUserState: UserState = {
  id: 0,
  name: "",
  isAuthd: false,
};
interface UserActions {
  setUser: () => (user: User) => void;
  resetUser: () => void;
}

const userState = atom<UserState>({
  key: RECOIL_ATOM_KEYS.USER_STATE,
  default: initUserState,
});

export const userActions: UserActions = {
  setUser: () => {
    const setUser = useSetRecoilState(userState);

    return useCallback(
      (user: User) =>
        setUser(() => ({
          id: user.id,
          name: user.name,
          isAuthd: true,
        })),
      []
    );
  },
  resetUser: () => {
    const setUser = useSetRecoilState(userState);
    setUser(initUserState);
  },
};

interface UserSelectors {
  isAuthd: () => boolean;
  userInfo: () => UserState;
}

const isAuthd = selector<boolean>({
  key: RECOIL_SELECTOR_KEYS.USER_IS_AUTHD,
  get: ({ get }) => get(userState).isAuthd,
});
const userInfo = selector<UserState>({
  key: RECOIL_SELECTOR_KEYS.USER_USER_INFO,
  get: ({ get }) => get(userState),
});
export const userSelectors: UserSelectors = {
  isAuthd: () => useRecoilValue(isAuthd),
  userInfo: () => useRecoilValue(userInfo),
};
