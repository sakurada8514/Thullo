import { AxiosErrorHandleProvider } from "components/provider/AxiosErrorHandleProvider";
import { FC, Suspense } from "react";
import { usePrincipalUser } from "utils/hooks/usePrincipalUser";
import { FlashAlertProvider } from "components/provider/FlashAlertProvider";
import { SWRConfig } from "swr";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => {
  const { isLoading } = usePrincipalUser();

  if (isLoading) return <p>loading</p>;

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
