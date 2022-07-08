import { MESSAGE } from "config/error/message";
import { FC, memo, ReactNode, useEffect } from "react";
import { ErrorResponse } from "types/api";
import { apiClient } from "../../libs/apiClient";

interface AxiosErrorHandleProviderProps {
  children: ReactNode;
}
export const AxiosErrorHandleProvider: FC<AxiosErrorHandleProviderProps> = memo(
  ({ children }: AxiosErrorHandleProviderProps) => {
    useEffect(() => {
      apiClient.interceptors.response.use(
        (response) => response,
        async (error) => {
          console.log(error);
          switch (error.response?.status) {
            case 422:
              return Promise.reject<ErrorResponse>(error.response);
            case 403:
              window.location.href = "/signin";
              return false;
            case 500:
              return false;
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
