import { flashActions } from "globalState/flash";
import { UserSignInRequest } from "models";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "services";

export const useSignIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const setFlash = flashActions.setFlash();

  const doSignIn = useCallback(
    async (reqest: UserSignInRequest) => {
      await signIn(reqest)
        .then(() => {
          navigate("/board/list");
        })
        .catch((_e) => {
          setErrorMessage(_e.message);
        });
    },
    [navigate, errorMessage]
  );

  return { doSignIn, errorMessage };
};
