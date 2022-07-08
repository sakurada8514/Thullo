/* eslint-disable react/jsx-no-constructed-context-values */
import { FlashAlert } from "components/ui/alert/FlashAlert";
import { createContext, Dispatch, FC, ReactNode, useState } from "react";

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

export const useFlashContext = () => {
  const [flash, setFlash] = useState<FlashState>({});
  const resetFlash = () => {
    setFlash({});
  };

  const FlashContext = createContext<FlashStateContext>({
    flash,
    setFlash,
    resetFlash,
  });

  return { FlashContext, flash, setFlash, resetFlash };
};

interface FlashAlertProviderProps {
  children: ReactNode;
}
export const FlashAlertProvider: FC<FlashAlertProviderProps> = ({
  children,
}: FlashAlertProviderProps) => {
  const { FlashContext, flash, setFlash, resetFlash } = useFlashContext();
  return (
    <>
      <FlashContext.Provider value={{ flash, setFlash, resetFlash }}>
        {children}
        <FlashAlert />
      </FlashContext.Provider>
    </>
  );
};
