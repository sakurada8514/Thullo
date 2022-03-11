import clsx from "clsx";
import { FC, memo } from "react";

const SIZE_CLASSES = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
} as { [key: string]: string };
const COLOR_CLASSES = {
  white: "text-white",
  primary: "text-primary",
  black: "text-black-500",
} as { [key: string]: string };

interface CrossIconProps {
  size?: "sm" | "md" | "lg";
  color?: "white" | "black" | "primary";
}
export const CrossIcon: FC<CrossIconProps> = memo(
  ({ size = "md", color = "primary" }: CrossIconProps) => {
    const classes = [SIZE_CLASSES[size], COLOR_CLASSES[color]].join(" ");
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={clsx("cursor-pointer", classes)}
        viewBox="0 0 1792 1792"
      >
        <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
      </svg>
    );
  }
);

CrossIcon.displayName = "CrossIcon";
