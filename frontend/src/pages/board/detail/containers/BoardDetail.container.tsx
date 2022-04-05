import { FC, memo } from "react";
import { BoardDetail } from "../components";
import { useBoardDetail } from "./BoardDetail.hook";

interface Props {
  id: string | undefined;
}

export const BoardDetailContainer: FC<Props> = memo(({ id }: Props) => {
  const { boardDetail } = useBoardDetail({ id });
  return <BoardDetail />;
});
BoardDetailContainer.displayName = "BoardDetailContainer";
