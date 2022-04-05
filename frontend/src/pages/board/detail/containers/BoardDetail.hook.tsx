import { SWR_KEYS } from "config/swr";
import { fetchBoardDetail } from "services";
import useSWR from "swr";

interface Param {
  id: string | undefined;
}

export const useBoardDetail = ({ id }: Param) => {
  const { data: boardDetail } = useSWR(
    [SWR_KEYS.FETCH_BOARD_DETAIL, id],
    fetchBoardDetail
  );
  return { boardDetail };
};
