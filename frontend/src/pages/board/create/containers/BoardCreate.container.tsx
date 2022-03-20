import { memo } from "react";
import { BoardCreate } from "../components";
import { useBoardCreate } from "./BoardCreate.hook";

export const BoardCreateContainer = memo(() => {
  const { initImage } = useBoardCreate();
  return <BoardCreate initImage={initImage} />;
});
BoardCreateContainer.displayName = "BoardCreateContainer";
