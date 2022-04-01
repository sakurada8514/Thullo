import { SWR_KEYS } from "config/swr";
import {
  fetchMyBoardList,
  fetchPublicBoardList,
} from "services/board/board.service";
import useSWR from "swr";

export const useBoardList = () => {
  const { data: myBoardList } = useSWR(
    SWR_KEYS.FETCH_MY_BOARD_LIST,
    fetchMyBoardList
  );
  const { data: publicBoardList } = useSWR(
    SWR_KEYS.FETCH_PUBLIC_BOARD_LIST,
    fetchPublicBoardList
  );
  return { myBoardList, publicBoardList };
};
