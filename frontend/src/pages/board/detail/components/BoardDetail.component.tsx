import { BaseLayout } from "components/layout/BaseLayout";
import { Avatar } from "components/model/user/Avatar";
import { BaseButton } from "components/ui/button/BaseButton";
import { LookCloseIcon } from "components/ui/icon/LookCloseIcon";
import { DotsIcon } from "components/ui/icon/DotsIcon";
import { LookOpenIcon } from "components/ui/icon/LookOpenIcon";
import { PlusIcon } from "components/ui/icon/PlusIcon";
import { Board } from "models/board";
import { FC, memo, ReactNode } from "react";
import { Input } from "components/ui/form/Input";
import { ValidationErrorMessage } from "components/ui/form/ValidationErrorMessage";
import { BaseSubmitButton } from "components/ui/button/BaseSubmitButton";
import { CrossIcon } from "components/ui/icon/CrossIcon";
import { ListCreateRequest } from "models/list/list.model";
import { useBoardDetailPresenter } from "./BoardDetail.presenter";

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
  doCreateList: (reqest: ListCreateRequest) => Promise<void>;
}

export const BoardDetail: FC<BoardDetailProps> = memo(
  ({ boardDetail, doCreateList }: BoardDetailProps) => {
    const {
      listFormik,
      showListForm,
      isLoading,
      handleShowListForm,
      handleCloseListForm,
    } = useBoardDetailPresenter({ doCreateList, boardId: boardDetail?.id });
    return (
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
              <div className="mt-6 h-full w-full rounded-lg">
                <div>
                  {showListForm ? (
                    <div className="bg-gray-300 p-1">
                      <form
                        onSubmit={listFormik.handleSubmit}
                        autoComplete="off"
                      >
                        <Input
                          id="listName"
                          name="listName"
                          placeholder="Board Name"
                          formik={listFormik}
                        />
                        <ValidationErrorMessage
                          touched={listFormik.touched.listName}
                          error={listFormik.errors.listName}
                        />
                        <div className="mt-2 flex">
                          <BaseSubmitButton
                            classes="flex items-center"
                            isLoading={isLoading}
                          >
                            <span className="">Add</span>
                          </BaseSubmitButton>
                          <button
                            type="button"
                            onClick={handleCloseListForm}
                            className="ml-2"
                          >
                            <CrossIcon color="black" size="lg" />
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="flex h-9 w-full items-center justify-between rounded-md bg-blue-200 py-1 px-8 text-primary md:px-4"
                      onClick={handleShowListForm}
                    >
                      <span className="">Add another list</span>
                      <PlusIcon color="primary" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </BaseLayout>
        )}
      </>
    );
  }
);

BoardDetail.displayName = "BoardDetail";
