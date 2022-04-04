import { OverCountText } from "components/ui/text/OverCountText";
import { Board, BoardMember } from "models/board";
import { FC, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../user/Avatar";

const MEMBER_DISPLAY_COUNT = 3;

interface BoardCardProps {
  board: Board;
}

export const BoardCard: FC<BoardCardProps> = memo(
  ({ board }: BoardCardProps) => {
    const sliceThreeMember = useCallback(
      (members: BoardMember[]): BoardMember[] =>
        members.slice(0, MEMBER_DISPLAY_COUNT),
      [board]
    );

    const calcOverMemberCount = useCallback(
      (members: BoardMember[]): number | null => {
        if (members.length <= MEMBER_DISPLAY_COUNT) return null;
        return members.length - MEMBER_DISPLAY_COUNT;
      },
      [board]
    );

    return (
      <Link
        to={`/board/${board.id}`}
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
          <p className="mb-3 text-lg font-bold">{board.boardName}</p>
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
              <OverCountText overCount={calcOverMemberCount(board.members)} />
            </div>
          </div>
        </div>
      </Link>
    );
  }
);
BoardCard.displayName = "BoardCard";
