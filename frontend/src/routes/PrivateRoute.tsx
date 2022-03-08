import { Navigate } from "react-router-dom";
import { FC } from "react";
import { userSelectors } from "globalState/user";

interface PrivateRouteProps {
  element: JSX.Element;
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
  const isAuthd: boolean = userSelectors.isAuthd();

  return isAuthd ? element : <Navigate to="/signin" />;
};

PrivateRoute.displayName = "PrivateRoute";
