import { BaseLayout } from "components/layout/BaseLayout";
import { Avatar } from "components/model/user/Avatar";
import { BaseButton } from "components/ui/button/BaseButton";
import { LookCloseIcon } from "components/ui/icon/LookCloseIcon";
import { DotsIcon } from "components/ui/icon/DotsIcon";
import { LookOpenIcon } from "components/ui/icon/LookOpenIcon";
import { PlusIcon } from "components/ui/icon/PlusIcon";
import { Board } from "models/board";
import { FC, memo, ReactNode } from "react";

const PUBLIC_SCOPE_TYPE_ICON = {
  only_member: <LookCloseIcon />,
  published: <LookOpenIcon />,
} as { [key: string]: ReactNode };
const PUBLIC_SCOPE_TYPE_NAME = {
  only_member: "Private",
  published: "Public",
} as { [key: string]: string };

interface BoardDetailProps {
  boardDetail: Board | undefined;
}

export const BoardDetail: FC<BoardDetailProps> = memo(
  ({ boardDetail }: BoardDetailProps) => (
    <>
      {/* TODO:: ローディング実装 */}
      {boardDetail && (
        <BaseLayout boardName={boardDetail.boardName}>
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <div className="flex items-center">
                <div className="flex h-9 w-32 items-center justify-between rounded-md bg-gray-300 py-1 px-4">
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
              <div className="mt-4 sm:mt-0">
                <button
                  type="button"
                  className="flex h-9 items-center justify-between rounded-md bg-gray-300 py-1 px-4"
                >
                  <DotsIcon />
                  <p className="ml-4 text-gray-500">Show Menu</p>
                </button>
              </div>
            </div>
            <div className="mt-6 h-full w-full rounded-lg bg-white p-4 md:p-8">
              <div>
                <button
                  type="button"
                  className="flex h-9 w-full items-center justify-between rounded-md bg-blue-100 py-1 px-8 text-primary md:px-4"
                >
                  <span className="">Add another list</span>
                  <PlusIcon color="primary" />
                </button>
              </div>
            </div>
          </div>
        </BaseLayout>
      )}
    </>
  )
);

BoardDetail.displayName = "BoardDetail";
