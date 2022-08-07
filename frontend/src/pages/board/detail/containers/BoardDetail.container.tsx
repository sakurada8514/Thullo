import { FC, memo } from "react";
import { BoardDetail } from "../components";
import { useBoardDetail } from "./BoardDetail.hook";

interface Props {
  id: string | undefined;
}

export const BoardDetailContainer: FC<Props> = memo(({ id }: Props) => {
  const { boardDetail, doCreateList } = useBoardDetail({ id });
  return <BoardDetail boardDetail={boardDetail} doCreateList={doCreateList} />;
});
BoardDetailContainer.displayName = "BoardDetailContainer";
