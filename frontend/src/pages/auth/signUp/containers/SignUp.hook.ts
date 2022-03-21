import { userActions } from "globalState/user";
import { UserSignUpRequest } from "models";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPrincipalUser, signUp } from "services";

export const useSignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const setUser = userActions.setUser();

  const doSignUp = useCallback(
    async (reqest: UserSignUpRequest) => {
      signUp(reqest)
        .then(async () => {
          const user = await fetchPrincipalUser();
          setUser(user);
          navigate("/board/list");
        })
        .catch((_e) => {
          setErrorMessage(_e.message);
        });
    },
    [navigate, errorMessage]
  );

  return { doSignUp, errorMessage };
};
