/* eslint-disable react/jsx-no-constructed-context-values */
import { AxiosErrorHandleProvider } from "components/provider/AxiosErrorHandleProvider";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => (
  <>
    <AxiosErrorHandleProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <ToastContainer />
    </AxiosErrorHandleProvider>
  </>
);
