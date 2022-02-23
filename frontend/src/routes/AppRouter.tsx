import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "pages/Auth/SignUp";

export const AppRouter = () => (
  <Routes>
    <Route path="/signup" element={<SignUpPage />} />
  </Routes>
);
