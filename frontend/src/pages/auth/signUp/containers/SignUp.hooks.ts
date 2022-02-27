import { UserSignUpRequest } from "models";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "services";

export const useSignUp = () => {
  const navigate = useNavigate();
  //   const [isLoading, setIsLoading] = useState<boolean>(false);
  const doSignUp = useCallback(
    async (reqest: UserSignUpRequest) => {
      //   setIsLoading(true);
      await signUp(reqest).then(() => {
        navigate("/board");
      });
    },
    [navigate]
  );

  return { doSignUp };
};
