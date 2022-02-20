import { lazy } from "react";

export const SignUpPage = lazy(() =>
  import("./SignUp.page").then((m) => ({ default: m.SignUpPage }))
);
