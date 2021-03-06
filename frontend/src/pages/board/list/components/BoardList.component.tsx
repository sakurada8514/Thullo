import { FC, memo } from "react";
import { BaseLayout } from "components/layout/BaseLayout";
import { PlusIcon } from "components/ui/icon/PlusIcon";
import { BaseButton } from "components/ui/button/BaseButton";
import { Link } from "react-router-dom";
import { Board } from "models/board";
import { BoardCards } from "components/model/board/BoardCards";
import { useBoardListPresenter } from "./BoardList.presenter";

interface BoardListProps {
  myBoardList: Board[] | undefined;
  publicBoardList: Board[] | undefined;
}

export const BoardList: FC<BoardListProps> = memo(
  ({ myBoardList, publicBoardList }: BoardListProps) => {
    const { location } = useBoardListPresenter();

    return (
      <>
        <BaseLayout>
          <div className="container mx-auto px-4 py-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold ">My Boards</h2>
              <Link to="/board/create" state={{ backgroundLocation: location }}>
                <BaseButton classes="flex items-center">
                  <PlusIcon />
                  <span className="ml-2">Add</span>
                </BaseButton>
              </Link>
            </div>
            <BoardCards boards={myBoardList} />
          </div>
          <div className="container mx-auto px-4 py-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold ">Public Boards</h2>
            </div>
            <BoardCards boards={publicBoardList} />
          </div>
        </BaseLayout>
      </>
    );
  }
);
BoardList.displayName = "BoardList";
