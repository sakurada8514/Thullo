import { FC, memo } from "react";
import { BaseLayout } from "components/layout/BaseLayout";
import { PlusIcon } from "components/ui/icon/PlusIcon";
import { BaseButton } from "components/ui/button/BaseButton";
import { Link } from "react-router-dom";
import { Board } from "models/board";
import { Avatar } from "components/model/user/Avatar";
import { useBoardListPresenter } from "./BoardList.presenter";

interface BoardListProps {
  myBoardList: Board[] | undefined;
}

export const BoardList: FC<BoardListProps> = memo(
  ({ myBoardList }: BoardListProps) => {
    const { location, sliceThreeMember, calcOverMemberCount } =
      useBoardListPresenter();

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
            <div className="mt-4 grid grid-cols-4 gap-2 gap-y-6 lg:gap-x-8">
              {myBoardList ? (
                myBoardList.map((board) => (
                  <Link
                    to={`board/${board.id}`}
                    key={board.id}
                    className="col-span-4 cursor-pointer sm:col-span-2 lg:col-span-1"
                  >
                    <div className="rounded-lg bg-white p-4 shadow-lg">
                      <img
                        src={board.image}
                        alt=""
                        width="400"
                        height="300"
                        className="mb-3 h-40 w-full rounded-lg object-cover"
                      />
                      <p className="mb-3 text-lg font-bold">
                        {board.boardName}
                      </p>
                      <div className="grid grid-cols-7 gap-1 lg:grid-cols-5">
                        {sliceThreeMember(board.members).map((member) => (
                          <Avatar
                            key={member.id}
                            name={member.name}
                            icon={member.icon}
                            classes="col-span-1"
                          />
                        ))}
                        <div className="col-span-2 flex items-center">
                          {calcOverMemberCount(board.members) ? (
                            <p className=" text-sm text-gray-400">
                              + {calcOverMemberCount(board.members)} others
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div> load</div>
              )}
            </div>
          </div>
        </BaseLayout>
      </>
    );
  }
);
BoardList.displayName = "BoardList";
