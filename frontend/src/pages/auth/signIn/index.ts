import { lazy } from "react";

export const SignUpPage = lazy(() =>
  import("./SignIn.page").then((m) => ({ default: m.SignInPage }))
);
