import { Avatar } from "components/model/user/Avatar";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "components/ui/form/SearchForm";
import { LogoTextIcon } from "components/ui/icon/LogoTextIcon";
import { SearchIcon } from "components/ui/icon/SearchIcon";
import { LogoIcon } from "components/ui/icon/LogoIcon";
import { GridIcon } from "components/ui/icon/GridIcon";
import { useSignInUser } from "utils/hooks/useSignInUser";

interface BaseHeaderProps {
  boardName?: string;
}

export const BaseHeader: FC<BaseHeaderProps> = memo(
  ({ boardName }: BaseHeaderProps) => {
    const { signInUser } = useSignInUser();
    return (
      <header className="overflow-hidden">
        <div className="flex justify-between px-4 py-3 shadow">
          <div className="flex items-center">
            <div className="hidden lg:block">
              <LogoTextIcon />
            </div>
            <div className="lg:hidden">
              <LogoIcon />
            </div>
            {boardName && (
              <div className="ml-4 flex items-center lg:ml-8">
                <p className="pr-2 font-bold">{boardName}</p>
                <Link
                  to="/board/list"
                  className="ml-2 flex rounded-lg bg-gray-300 p-1 text-gray-500 lg:p-2"
                >
                  <GridIcon />
                  <span className="hidden md:ml-2 md:block">All board</span>
                </Link>
              </div>
            )}
          </div>
          <div className=" flex items-center">
            {/* 検索ぺーじ作る */}
            <Link
              to="/board/search"
              className="rounded-lg bg-primary p-1 lg:hidden"
            >
              <SearchIcon />
            </Link>
            <SearchForm />
            <div className="ml-6 flex items-center">
              <Avatar name={signInUser.name} icon={signInUser.icon} />
              <p className="ml-2">{signInUser.name}</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
);
BaseHeader.displayName = "BaseHeader";
