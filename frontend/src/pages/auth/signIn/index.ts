import { lazy } from "react";

export const SignInPage = lazy(() =>
  import("./SignIn.page").then((m) => ({ default: m.SignInPage }))
);
