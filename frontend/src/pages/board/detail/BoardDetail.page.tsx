import { memo } from "react";
import { useBoardDetailParams } from "./BoardDetail.params";
import { BoardDetailContainer } from "./containers";

export const BoardDetailPage = memo(() => {
  const { id } = useBoardDetailParams();
  return <BoardDetailContainer id={id} />;
});
BoardDetailPage.displayName = "BoardDetailPage";
