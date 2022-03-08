import { userActions } from "globalState/user";
import { User } from "models";
import { useEffect } from "react";
import { authdUser } from "services/user/user.service";
import useSWR from "swr";

export const useAuthdUser = () => {
  const setUser = userActions.setUser();
  const { data: user, error } = useSWR<User>("eeee", authdUser, {
    shouldRetryOnError: false,
  });

  const isLoading = !user && !error;

  useEffect(() => {
    if (user) setUser(user);
  }, [user]);

  return { isLoading };
};
