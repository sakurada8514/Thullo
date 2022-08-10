/* eslint-disable react/jsx-no-constructed-context-values */
import { AxiosErrorHandleProvider } from "components/provider/AxiosErrorHandleProvider";
import { LoadingProvider } from "components/provider/LoadingProvider";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => (
  <>
    <BrowserRouter>
      <AxiosErrorHandleProvider>
        <LoadingProvider>
          <AppRouter />
          <ToastContainer />
        </LoadingProvider>
      </AxiosErrorHandleProvider>
    </BrowserRouter>
  </>
);
