import { RECOIL_ATOM_KEYS, RECOIL_SELECTOR_KEYS } from "config/recoil";
import { User } from "models";
import { useCallback } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

interface UserState {
  id: number;
  name: string;
}
interface UserActions {
  setUser: () => (user: User) => void;
  resetUser: () => void;
}

const userState = atom<UserState | undefined>({
  key: RECOIL_ATOM_KEYS.USER_STATE,
  default: undefined,
});

export const userActions: UserActions = {
  setUser: () => {
    const setUser = useSetRecoilState(userState);

    return useCallback(
      (user: User) =>
        setUser(() => ({
          id: user.id,
          name: user.name,
        })),
      []
    );
  },
  resetUser: () => {
    const setUser = useSetRecoilState(userState);
    setUser(undefined);
  },
};

interface UserSelectors {
  isAuthd: () => boolean;
}

const isAuthd = selector<boolean>({
  key: RECOIL_SELECTOR_KEYS.USER_IS_AUTHD,
  get: ({ get }) => get(userState) !== undefined,
});

export const userSelectors: UserSelectors = {
  isAuthd: () => useRecoilValue(isAuthd),
};
