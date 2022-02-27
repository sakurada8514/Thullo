import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "pages/auth/signUp";

export const AppRouter = () => (
  <Routes>
    <Route path="/signup" element={<SignUpPage />} />
  </Routes>
);
