import { BarsLoading } from "components/ui/loading/BarsLoading";
import { Board } from "models/board";
import { FC, memo } from "react";
import { BoardCard } from "./BoardCard";

interface BoardCardsProps {
  boards: Board[] | undefined;
}
export const BoardCards: FC<BoardCardsProps> = memo(
  ({ boards }: BoardCardsProps) => (
    <div className="mt-4 grid grid-cols-4 gap-2 gap-y-6 lg:gap-x-8">
      {boards ? (
        <>
          {boards.length === 0 && (
            <div className="font-bold text-gray-500">No Board</div>
          )}
          {boards.map((board) => (
            <BoardCard key={board.id} board={board} />
          ))}
        </>
      ) : (
        <div className="col-span-4 flex justify-center pt-8">
          <BarsLoading />
        </div>
      )}
    </div>
  )
);
BoardCards.displayName = "BoardCards";
