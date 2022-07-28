/* eslint-disable react/jsx-no-constructed-context-values */
import { AxiosErrorHandleProvider } from "components/provider/AxiosErrorHandleProvider";
import { FC } from "react";
import { FlashAlertProvider } from "components/provider/FlashAlertProvider";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => (
  <>
    <FlashAlertProvider>
      <AxiosErrorHandleProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AxiosErrorHandleProvider>
    </FlashAlertProvider>
  </>
);
