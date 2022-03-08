import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "pages/auth/signUp";
import { SignInPage } from "pages/auth/signIn/SignIn.page";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => (
  <Routes>
    <Route path="/signup" element={<PublicRoute element={<SignUpPage />} />} />
    <Route path="/signin" element={<PublicRoute element={<SignInPage />} />} />
  </Routes>
);
