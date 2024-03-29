import { Navigate } from "react-router-dom";
import { FC } from "react";
import { useSignInUser } from "utils/hooks/useSignInUser";

interface PrivateRouteProps {
  element: JSX.Element;
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthd, isLoading } = useSignInUser();

  if (isLoading) return <p>loading</p>;

  return isAuthd ? element : <Navigate to="/signin" />;
};

PrivateRoute.displayName = "PrivateRoute";
