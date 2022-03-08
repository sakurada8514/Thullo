import { Navigate } from "react-router-dom";
import { FC } from "react";
import { userSelectors } from "globalState/user";

interface PublicRouteProps {
  element: JSX.Element;
}
export const PublicRoute: FC<PublicRouteProps> = ({ element }) => {
  const isAuthd: boolean = userSelectors.isAuthd();

  return isAuthd ? <Navigate to="/mypage" /> : element;
};

PublicRoute.displayName = "PublicRoute";
