/* eslint-disable react/jsx-no-constructed-context-values */
import { AxiosErrorHandleProvider } from "components/provider/AxiosErrorHandleProvider";
import { BarsLoading } from "components/ui/loading/BarsLoading";
import { Loading } from "libs/loading";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => (
  <>
    <BrowserRouter>
      <AxiosErrorHandleProvider>
        <AppRouter />
        <ToastContainer />
        <Loading />
      </AxiosErrorHandleProvider>
    </BrowserRouter>
  </>
);
