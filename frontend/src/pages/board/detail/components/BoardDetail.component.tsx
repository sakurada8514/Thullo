import { BaseLayout } from "components/layout/BaseLayout";
import { Board } from "models/board";
import { FC, memo } from "react";

interface BoardDetailProps {
  boardDetail: Board | undefined;
}

export const BoardDetail: FC<BoardDetailProps> = memo(
  ({ boardDetail }: BoardDetailProps) => (
    <>
      {boardDetail && (
        <BaseLayout boardName={boardDetail.boardName}>
          <div className="container mx-auto px-4 py-10">
            <p>ss</p>
          </div>
        </BaseLayout>
      )}
    </>
  )
);

BoardDetail.displayName = "BoardDetail";
