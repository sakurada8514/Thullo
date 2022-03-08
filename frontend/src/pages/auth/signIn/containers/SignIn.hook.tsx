import { UserSignInRequest } from "models";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "services";

export const useSignIn = () => {
  const navigate = useNavigate();

  const doSignIn = useCallback(
    async (reqest: UserSignInRequest) => {
      await signIn(reqest)
        .then(() => {
          navigate("/workspace");
        })
        .catch((e) => {
          console.log("error", e);
        });
    },
    [navigate]
  );

  return { doSignIn };
};
