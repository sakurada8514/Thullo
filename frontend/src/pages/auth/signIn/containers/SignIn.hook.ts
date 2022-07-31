import { UserSignInRequest } from "models";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "services";

export const useSignIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const doSignIn = useCallback(
    async (reqest: UserSignInRequest) => {
      signIn(reqest)
        .then(async () => {
          navigate("/board/list");
        })
        .catch((_e) => {
          setErrorMessage(_e.errors[0]);
        });
    },
    [navigate, errorMessage]
  );

  return { doSignIn, errorMessage };
};
