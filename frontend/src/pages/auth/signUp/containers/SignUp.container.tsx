import { FC, memo } from "react";
import { SignUp } from "pages/auth/signUp/component";
import { useSignUp } from "./SignUp.hooks";

export const SignUpContainer: FC = memo(() => {
  const { doSignUp } = useSignUp();
  return <SignUp doSginUp={doSignUp} />;
});
SignUpContainer.displayName = "SignUpContainer";
