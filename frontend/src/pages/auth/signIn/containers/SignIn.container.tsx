import { FC, memo } from "react";
import { SignIn } from "../components";
import { useSignIn } from "./SignIn.hook";

export const SignInContainer: FC = memo(() => {
  const { doSignIn, isUnAuthError } = useSignIn();
  return <SignIn doSignIn={doSignIn} isUnAuthError={isUnAuthError} />;
});
SignInContainer.displayName = "SignInContainer";
