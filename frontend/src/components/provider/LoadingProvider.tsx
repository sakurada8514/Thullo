/* eslint-disable react/jsx-no-constructed-context-values */
import { Loading } from "components/ui/loading/Loading";
import React, { createContext, useState } from "react";

export const LoadingContext = createContext(
  {} as {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }
);
interface Props {
  children: React.ReactNode;
}
export const LoadingProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      <Loading />
    </LoadingContext.Provider>
  );
};
