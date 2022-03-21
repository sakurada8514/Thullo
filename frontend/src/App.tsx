import { FlashAlert } from "components/ui/alert/FlashAlert";
import { WithAxiosErrorHandler } from "libs/apiClient/WithAxiosErrorHandler";
import { FC, Suspense } from "react";
import { usePrincipalUser } from "utils/hooks/usePrincipalUser";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => {
  const { isLoading } = usePrincipalUser();

  if (isLoading) return <p>loading</p>;

  return (
    <>
      <Suspense fallback={<div>Loading..</div>}>
        <WithAxiosErrorHandler>
          <AppRouter />
        </WithAxiosErrorHandler>
      </Suspense>
      <FlashAlert />
    </>
  );
};
