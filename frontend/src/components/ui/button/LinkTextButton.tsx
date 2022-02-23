import { FC, memo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  to: string;
}
export const LinkTextButton: FC<Props> = memo(({ children, to }: Props) => (
  <Link
    to={to}
    className="inline-flex items-center text-center text-xs font-thin text-gray-500 hover:text-gray-700"
  >
    {children}
  </Link>
));

LinkTextButton.displayName = "LinkTextButton";
