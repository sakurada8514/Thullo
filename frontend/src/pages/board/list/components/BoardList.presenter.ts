import { useLocation } from "react-router-dom";

export const useBoardListPresenter = () => {
  const location = useLocation();

  return { location };
};
