import { LoadingContext } from "components/provider/LoadingProvider";
import { BarsLoading } from "components/ui/loading/BarsLoading";
import { useContext, useEffect } from "react";

export const Loading = () => {
  const { isLoading } = useContext(LoadingContext);
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  return (
    <>
      {isLoading && (
        <div
          id="loading"
          className="fixed top-0 left-0 hidden h-screen w-screen items-center justify-center bg-black bg-opacity-40"
        >
          <BarsLoading />
        </div>
      )}
    </>
  );
};
