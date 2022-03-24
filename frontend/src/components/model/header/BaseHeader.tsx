import { Avatar } from "components/model/user/Avatar";
import { userSelectors } from "globalState/user";
import { memo } from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "components/ui/form/SearchForm";
import { LogoIcon } from "components/ui/icon/LogoIcon";
import { SearchIcon } from "components/ui/icon/SearchIcon";

// interface BaseHeaderProps {}

export const BaseHeader = memo(() => {
  const user = userSelectors.userInfo();
  return (
    <header className="overflow-hidden">
      <div className="flex justify-between px-4 py-3 shadow">
        <LogoIcon />
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
            <Avatar name={user.name} icon={user.icon} />
            <p className="ml-2">{user.name}</p>
          </div>
        </div>
      </div>
    </header>
  );
});
BaseHeader.displayName = "BaseHeader";
