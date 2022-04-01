import { memo } from "react";
import { BoardList } from "../components";
import { useBoardList } from "./BoardList.hook";

export const BoardListContainer = memo(() => {
  const { myBoardList, publicBoardList } = useBoardList();
  return (
    <BoardList myBoardList={myBoardList} publicBoardList={publicBoardList} />
  );
});
BoardListContainer.displayName = "BoardListContainer";
