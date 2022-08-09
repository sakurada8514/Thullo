import { SWR_KEYS } from "config/swr";
import { ListCreateRequest } from "models/list/list.model";
import { useCallback } from "react";
import { fetchBoardDetail } from "services";
import useSWR from "swr";
import { createList } from "services/list/list.service";

interface Param {
  id: string | undefined;
}

export const useBoardDetail = ({ id }: Param) => {
  const { data: boardDetail, mutate } = useSWR(
    [SWR_KEYS.FETCH_BOARD_DETAIL, id],
    fetchBoardDetail
  );

  const doCreateList = useCallback(async (reqest: ListCreateRequest) => {
    await createList(reqest).then((_res) => {
      mutate();
    });
  }, []);

  return { boardDetail, doCreateList };
};
