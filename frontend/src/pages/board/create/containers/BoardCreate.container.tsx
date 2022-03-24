import { memo } from "react";
import { BoardCreate } from "../components";
import { useBoardCreate } from "./BoardCreate.hook";

export const BoardCreateContainer = memo(() => {
  const { initImage, doCreateBoard } = useBoardCreate();
  return <BoardCreate initImage={initImage} doCreateBoard={doCreateBoard} />;
});
BoardCreateContainer.displayName = "BoardCreateContainer";
