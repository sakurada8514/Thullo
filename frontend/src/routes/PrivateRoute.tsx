import { Navigate } from "react-router-dom";
import { FC } from "react";

interface PrivateRouteProps {
  element: JSX.Element;
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
  const isAuthd = false;

  return isAuthd ? element : <Navigate to="/signin" />;
};

PrivateRoute.displayName = "PrivateRoute";
