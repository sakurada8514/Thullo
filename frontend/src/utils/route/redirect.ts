import { useNavigate } from "react-router-dom";

export const toSignInPage = () => {
  const navigate = useNavigate();
  navigate("/signin");
};
