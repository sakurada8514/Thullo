import { FC, memo } from "react";
import { SignUp } from "pages/auth/signUp/components";
import { useSignUp } from "./SignUp.hook";

export const SignUpContainer: FC = memo(() => {
  const { doSignUp } = useSignUp();
  return <SignUp doSginUp={doSignUp} />;
});
SignUpContainer.displayName = "SignUpContainer";
