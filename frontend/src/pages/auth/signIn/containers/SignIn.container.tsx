import { FC, memo } from "react";
import { SignIn } from "../components";
import { useSignIn } from "./SignIn.hook";

export const SignInContainer: FC = memo(() => {
  const { doSignIn, errorMessage } = useSignIn();

  return <SignIn doSignIn={doSignIn} errorMessage={errorMessage} />;
});
SignInContainer.displayName = "SignInContainer";
