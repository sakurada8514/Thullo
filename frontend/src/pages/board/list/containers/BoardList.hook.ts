import { fetchMyBoardList } from "services/board/board.service";
import useSWR from "swr";

export const useBoardList = () => {
  const { data: myBoardList } = useSWR("s", fetchMyBoardList);
  return { myBoardList };
};
