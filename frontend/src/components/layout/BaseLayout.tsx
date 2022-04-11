import { BaseHeader } from "components/model/header/BaseHeader";
import { FC, ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
  boardName?: string;
  withOutHeader?: boolean;
  withOutFooter?: boolean;
}

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  boardName,
  withOutHeader = false,
  withOutFooter = false,
}) => (
  <div className=" flex min-h-screen flex-col justify-between">
    {!withOutHeader && <BaseHeader boardName={boardName} />}
    <main className="flex-grow bg-blue-50">{children}</main>
    {!withOutFooter && (
      <footer className="bg-blue-50">
        <p className="py-4 text-center text-xs text-gray-400">
          &copy; 2022 Ryota Sakurada, devchallenges.io
        </p>
      </footer>
    )}
  </div>
);
