import { UserSignUpRequest } from "models";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "services";

export const useSignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const doSignUp = useCallback(
    async (reqest: UserSignUpRequest) => {
      signUp(reqest)
        .then(async () => {
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
