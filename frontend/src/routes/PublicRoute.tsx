import { Navigate } from "react-router-dom";
import { FC } from "react";
import { useSignInUser } from "utils/hooks/useSignInUser";

interface PublicRouteProps {
  element: JSX.Element;
}
export const PublicRoute: FC<PublicRouteProps> = ({ element }) => {
  const { isAuthd, isLoading } = useSignInUser();

  if (isLoading) return <p>loading</p>;

  return isAuthd ? <Navigate to="/board/list" /> : element;
};

PublicRoute.displayName = "PublicRoute";
