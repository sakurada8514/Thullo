import { SWR_KEYS } from "config/swr";
import { BoardCreateRequest } from "models/board";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createBoard } from "services/board/board.service";
import { fetchRandomImage } from "services/unsplash/unsplash.service";
import useSWR from "swr";

export const useBoardCreate = () => {
  const navigate = useNavigate();
  const { data: initImage, mutate } = useSWR(
    SWR_KEYS.FATCH_RANDOM_IMAGE,
    fetchRandomImage,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const doCreateBoard = useCallback(async (reqest: BoardCreateRequest) => {
    createBoard(reqest).then(() => {
      mutate();
      navigate("/board/1");
    });
  }, []);

  return { initImage, doCreateBoard };
};
