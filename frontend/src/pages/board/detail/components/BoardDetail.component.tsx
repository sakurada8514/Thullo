import { BaseLayout } from "components/layout/BaseLayout";
import { Avatar } from "components/model/user/Avatar";
import { BaseButton } from "components/ui/button/BaseButton";
import { LookCloseIcon } from "components/ui/icon/LookCloseIcon";
import { LookOpenIcon } from "components/ui/icon/LookOpenIcon";
import { PlusIcon } from "components/ui/icon/PlusIcon";
import { Board } from "models/board";
import { FC, memo, ReactNode } from "react";

const PUBLIC_SCOPE_TYPE_ICON = {
  0: <LookCloseIcon />,
  1: <LookOpenIcon />,
} as { [key: string]: ReactNode };
const PUBLIC_SCOPE_TYPE_NAME = {
  0: "Private",
  1: "Public",
} as { [key: string]: string };

interface BoardDetailProps {
  boardDetail: Board | undefined;
}

export const BoardDetail: FC<BoardDetailProps> = memo(
  ({ boardDetail }: BoardDetailProps) => (
    <>
      {boardDetail && (
        <BaseLayout boardName={boardDetail.boardName}>
          <div className="container mx-auto px-4 py-10">
            <div className="flex">
              <div className="flex w-32 items-center justify-between rounded-md bg-gray-300 py-1 px-4">
                {PUBLIC_SCOPE_TYPE_ICON[boardDetail.publicScopeType]}
                <p className="text-gray-500">
                  {PUBLIC_SCOPE_TYPE_NAME[boardDetail.publicScopeType]}
                </p>
              </div>
              <div className="ml-2 flex lg:ml-6">
                {boardDetail.users.map((user) => (
                  <Avatar
                    classes="mx-1"
                    key={user.id}
                    name={user.name}
                    icon={user.icon}
                  />
                ))}
                <BaseButton classes="py-2 px-2 ml-2">
                  <PlusIcon />
                </BaseButton>
              </div>
            </div>
          </div>
        </BaseLayout>
      )}
    </>
  )
);

BoardDetail.displayName = "BoardDetail";
