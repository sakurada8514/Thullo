import { RECOIL_ATOM_KEYS, RECOIL_SELECTOR_KEYS } from "config/recoil";
import { useCallback } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

type FlashType = "error" | "success";

interface FlashState {
  type: FlashType;
  message: string;
}
interface FlashActions {
  setFlash: () => (type: FlashType, message: string) => void;
  resetFlash: () => () => void;
}

const flashState = atom<FlashState | undefined>({
  key: RECOIL_ATOM_KEYS.FLASH_STATE,
  default: undefined,
});

export const flashActions: FlashActions = {
  setFlash: () => {
    const setFlash = useSetRecoilState(flashState);
    return useCallback(
      (type, message) =>
        setFlash(() => ({
          type,
          message,
        })),
      []
    );
  },
  resetFlash: () => {
    const setFlash = useSetRecoilState(flashState);
    return useCallback(() => setFlash(undefined), []);
  },
};

interface FlashSelectors {
  flashInfo: () => FlashState | undefined;
}
const flashInfo = selector<FlashState | undefined>({
  key: RECOIL_SELECTOR_KEYS.FLASH_FLASH_INFO,
  get: ({ get }) => get(flashState),
});

export const flashSelectors: FlashSelectors = {
  flashInfo: () => useRecoilValue(flashInfo),
};
