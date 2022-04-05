import { SWR_KEYS } from "config/swr";
import { fetchBoardDetail } from "services";
import useSWR from "swr";

export const useBoardDetailPresenter = () => {
  const { data } = useSWR(SWR_KEYS.FETCH_BOARD_DETAIL, fetchBoardDetail);
};
