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
          // const user = await fetchPrincipalUser();
          // setUser(user);
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
