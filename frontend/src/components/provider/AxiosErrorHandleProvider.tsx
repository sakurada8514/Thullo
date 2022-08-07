import { MESSAGE } from "config/error/message";
import { FC, memo, ReactNode, useEffect } from "react";
import { ErrorResponse } from "types/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../libs/apiClient";

interface AxiosErrorHandleProviderProps {
  children: ReactNode;
}
export const AxiosErrorHandleProvider: FC<AxiosErrorHandleProviderProps> = memo(
  ({ children }: AxiosErrorHandleProviderProps) => {
    const navigate = useNavigate();
    useEffect(() => {
      apiClient.interceptors.response.use(
        (response) => response,
        async (error) => {
          switch (error.response?.status) {
            // case 401:
            //   window.location.href = "/signin";
            //   return false;
            case 422:
              return Promise.reject<ErrorResponse>(error.response?.data);
            case 404:
              navigate("/404");
              return Promise.reject<ErrorResponse>(error.response?.data);
            case 500:
              toast.error(MESSAGE.serverError);
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
