import { AxiosErrorHandleProvider } from "components/provider/AxiosErrorHandleProvider";
import { FC } from "react";
import { usePrincipalUser } from "utils/hooks/usePrincipalUser";
import { FlashAlertProvider } from "components/provider/FlashAlertProvider";
import { BarsLoading } from "components/ui/loading/BarsLoading";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => {
  const { isLoading } = usePrincipalUser();

  if (isLoading)
    return (
      <div className="flex h-screen w-screen justify-center bg-blue-50 pt-28">
        <BarsLoading />
      </div>
    );

  return (
    <>
      <FlashAlertProvider>
        <AxiosErrorHandleProvider>
          <AppRouter />
        </AxiosErrorHandleProvider>
      </FlashAlertProvider>
    </>
  );
};
