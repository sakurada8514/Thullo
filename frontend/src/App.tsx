import { AxiosErrorHandleProvider } from "components/provider/AxiosErrorHandleProvider";
import { FC } from "react";
import { FlashAlertProvider } from "components/provider/FlashAlertProvider";
import { BarsLoading } from "components/ui/loading/BarsLoading";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => (
  // const { isLoading } = usePrincipalUser();

  // if (isLoading)
  //   return (
  //     <div className="flex h-screen w-screen justify-center bg-blue-50 pt-28">
  //       <BarsLoading />
  //     </div>
  //   );

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
