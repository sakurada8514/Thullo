import { FC, Suspense } from "react";
import { useAuthdUser } from "utils/hooks/useAuthdUser";
import { AppRouter } from "./routes/AppRouter";

export const App: FC = () => {
  const { isLoading } = useAuthdUser();

  if (isLoading) return <p>loading</p>;

  return (
    <Suspense fallback={<div>Loading..</div>}>
      <AppRouter />
    </Suspense>
  );
};
