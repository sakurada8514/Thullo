import { UserSignUpRequest } from "models";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "services";

export const useSignUp = () => {
  const navigate = useNavigate();

  const doSignUp = useCallback(
    async (reqest: UserSignUpRequest) => {
      await signUp(reqest);
      navigate("/board");
    },
    [navigate]
  );

  return { doSignUp };
};
