import { SWR_KEYS } from "config/swr";
import { userActions } from "globalState/user";
import { User } from "models";
import { useEffect, useState } from "react";
import { fetchPrincipalUser } from "services";
import useSWR from "swr";

export const usePrincipalUser = () => {
  const setUser = userActions.setUser();
  const [isLoading, setIsLoading] = useState(true);
  const { data: user, error } = useSWR<User>(
    SWR_KEYS.FATCH_PRINCIPAL_USER,
    fetchPrincipalUser,
    {
      shouldRetryOnError: false,
    }
  );

  useEffect(() => {
    if (user) {
      setUser(user);
      setIsLoading(false);
    }
    if (error) {
      setIsLoading(false);
    }
  }, [user, error]);

  return { isLoading };
};
