import { MESSAGE } from "config/error/message";
import { FC, memo, ReactNode, useEffect } from "react";
import { ErrorResponse } from "types/api";
import { apiClient } from "../../libs/apiClient";
import { useFlashContext } from "./FlashAlertProvider";

interface AxiosErrorHandleProviderProps {
  children: ReactNode;
}
export const AxiosErrorHandleProvider: FC<AxiosErrorHandleProviderProps> = memo(
  ({ children }: AxiosErrorHandleProviderProps) => {
    const { setFlash } = useFlashContext();
    useEffect(() => {
      apiClient.interceptors.response.use(
        (response) => response,
        async (error) => {
          console.log(error);
          switch (error.response?.status) {
            // case 401:
            //   window.location.href = "/signin";
            //   return false;
            case 422:
              return Promise.reject<ErrorResponse>(error.response?.data);
            case 500:
              setFlash({ type: "error", message: MESSAGE.serverError });
              return Promise.reject<ErrorResponse>(error.response?.data);
            default:
              return Promise.reject<ErrorResponse>(error.response?.data);
          }
        }
      );
    }, []);

    return <>{children}</>;
  }
);

AxiosErrorHandleProvider.displayName = "AxiosErrorHandleProvider";
