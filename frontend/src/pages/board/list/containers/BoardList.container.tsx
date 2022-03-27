import { memo } from "react";
import { BoardList } from "../components";
import { useBoardList } from "./BoardList.hook";

export const BoardListContainer = memo(() => {
  const { myBoardList } = useBoardList();
  return <BoardList myBoardList={myBoardList} />;
});
BoardListContainer.displayName = "BoardListContainer";
