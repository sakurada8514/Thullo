import { FC, memo } from "react";
import { SignUp } from "pages/auth/signUp/components";
import { useSignUp } from "./SignUp.hook";

export const SignUpContainer: FC = memo(() => {
  const { doSignUp, errorMessage } = useSignUp();
  return <SignUp doSginUp={doSignUp} errorMessage={errorMessage} />;
});
SignUpContainer.displayName = "SignUpContainer";
