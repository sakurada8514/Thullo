import { RECOIL_ATOM_KEYS } from "config/recoil";
import { atom, useSetRecoilState } from "recoil";

interface ErrorState {
  code: string;
  message: string;
}
interface ErrorActions {
  setError: (code: string, message: string) => void;
}

const errorState = atom<ErrorState | undefined>({
  key: RECOIL_ATOM_KEYS.ERROR_STATE,
  default: undefined,
});

export const errorActions: ErrorActions = {
  setError: (code, message) => {
    const setError = useSetRecoilState(errorState);
    const newErrorState: ErrorState = {
      code,
      message,
    };
    setError(newErrorState);
  },
};
