import { useParams } from "react-router-dom";

export const useBoardDetailParams = () => {
  const { id } = useParams();

  return { id };
};
