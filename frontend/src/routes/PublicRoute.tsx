import { Navigate } from "react-router-dom";
import { FC } from "react";

interface PublicRouteProps {
  element: JSX.Element;
}
export const PublicRoute: FC<PublicRouteProps> = ({ element }) => {
  const isAuthd = false;

  return isAuthd ? <Navigate to="/board/list" /> : element;
};

PublicRoute.displayName = "PublicRoute";
