import { UserSignInRequest } from "models";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "services";

export const useSignIn = () => {
  const navigate = useNavigate();
  const [isUnAuthError, setIsUnAuthError] = useState<boolean>(false);

  const doSignIn = useCallback(
    async (reqest: UserSignInRequest) => {
      await signIn(reqest)
        .then(() => {
          navigate("/workspace");
        })
        .catch((e) => {
          console.log("error", e);
          setIsUnAuthError(true);
        });
    },
    [navigate, isUnAuthError]
  );

  return { doSignIn, isUnAuthError };
};
