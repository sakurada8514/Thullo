import { FC, memo } from "react";
import { BaseLayout } from "components/layout/BaseLayout";
import { PlusIcon } from "components/ui/icon/PlusIcon";
import { BaseButton } from "components/ui/button/BaseButton";
import { Link } from "react-router-dom";
import { useBoardListPresenter } from "./BoardList.presenter";

export const BoardList: FC = memo(() => {
  const { location } = useBoardListPresenter();
  return (
    <>
      <BaseLayout>
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold ">My Boards</h2>
            <Link to="/board/create" state={{ backgroundLocation: location }}>
              <BaseButton classes="flex items-center">
                <PlusIcon />
                <span className="ml-2">Add</span>
              </BaseButton>
            </Link>
          </div>
        </div>
      </BaseLayout>
    </>
  );
});
BoardList.displayName = "BoardList";
