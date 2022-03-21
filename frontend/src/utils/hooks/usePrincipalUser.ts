import { SWR_KEYS } from "config/swr";
import { userActions } from "globalState/user";
import { User } from "models";
import { useEffect } from "react";
import { fetchPrincipalUser } from "services";
import useSWR from "swr";

export const usePrincipalUser = () => {
  const setUser = userActions.setUser();
  const { data: user, error } = useSWR<User>(
    SWR_KEYS.FATCH_PRINCIPAL_USER,
    fetchPrincipalUser,
    {
      shouldRetryOnError: false,
    }
  );

  const isLoading = !user && !error;

  useEffect(() => {
    if (user) setUser(user);
  }, [user]);

  return { isLoading };
};
