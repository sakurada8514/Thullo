import { SWR_KEYS } from "config/swr";
import { fetchSignInUser } from "services";
import useSWR from "swr";

export const useSignInUser = () => {
  const {
    data: signInUser,
    error,
    isValidating,
    mutate,
  } = useSWR(SWR_KEYS.FATCH_SIGN_IN_USER, fetchSignInUser, {
    shouldRetryOnError: false,
    revalidateIfStale: false,
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const isAuthd = typeof signInUser !== "undefined";

  return { signInUser, isValidating, isAuthd, mutate };
};
