import { UserSignUpRequest } from "models";
import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { signUp } from "services";

export const useSignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const doSignUp = useCallback(
    async (reqest: UserSignUpRequest) => {
      signUp(reqest)
        .then(() => {
          navigate("/board/list");
        })
        .catch((_e) => {
          // バリデーションなどのえらー対応
          // setErrorMessage(_e.errors.full_messages[0]);
        });
    },
    [navigate, errorMessage]
  );

  return { doSignUp, errorMessage };
};
