import { MESSAGE } from "config/error/message";
import { flashActions } from "globalState/flash";
import { FC, memo, ReactNode, useEffect } from "react";
import { ErrorResponse } from "types/api";
import { apiClient } from ".";

interface WithAxiosErrorHandlerProps {
  children: ReactNode;
}
export const WithAxiosErrorHandler: FC<WithAxiosErrorHandlerProps> = memo(
  ({ children }: WithAxiosErrorHandlerProps) => {
    const setFlash = flashActions.setFlash();

    useEffect(() => {
      apiClient.interceptors.response.use(
        (response) => response,
        async (error) => {
          console.error("interceptors", error);

          switch (error.response?.status) {
            case 400:
            case 401:
              return Promise.reject<ErrorResponse>(error.response?.data);
            case 403:
              window.location.href = "/signin";
              return false;
            case 500:
              setFlash("error", MESSAGE.serverError);
              return false;
            default:
              return Promise.reject<ErrorResponse>(error.response?.data);
          }
        }
      );
    }, [setFlash]);

    return <>{children}</>;
  }
);

WithAxiosErrorHandler.displayName = "WithAxiosErrorHandler";
