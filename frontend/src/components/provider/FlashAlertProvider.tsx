import { FlashAlert } from "components/ui/alert/FlashAlert";
import { FC, ReactNode } from "react";

interface FlashAlertProviderProps {
  children: ReactNode;
}
export const FlashAlertProvider: FC<FlashAlertProviderProps> = ({
  children,
}: FlashAlertProviderProps) => (
  <>
    {children}
    <FlashAlert />
  </>
);
