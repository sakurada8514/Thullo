import { FlashAlert } from "components/ui/alert/FlashAlert";
import { createContext, Dispatch, FC, ReactNode, useState } from "react";

const useFlash = () => {
  const [flash, setFlash] = useState<FlashState>({});
  const resetFlash = () => {
    setFlash({});
  };
  return { flash, setFlash, resetFlash };
};
interface FlashStateContext {
  flash: FlashState;
  setFlash: Dispatch<React.SetStateAction<FlashState>>;
  resetFlash: () => void;
}
interface FlashState {
  type?: FlashType;
  message?: string;
}
type FlashType = "error" | "success";

export const FlashContext = createContext<FlashStateContext>(useFlash());

interface FlashAlertProviderProps {
  children: ReactNode;
}
export const FlashAlertProvider: FC<FlashAlertProviderProps> = ({
  children,
}: FlashAlertProviderProps) => (
  <>
    <FlashContext.Provider value={useFlash()}>
      {children}
      <FlashAlert />
    </FlashContext.Provider>
  </>
);
