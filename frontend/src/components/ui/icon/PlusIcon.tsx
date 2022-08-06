import clsx from "clsx";
import { FC, memo } from "react";

const COLOR_CLASSES = {
  white: "text-white",
  primary: "text-primary",
  black: "text-black-500",
} as { [key: string]: string };

interface PlusIconProps {
  color?: "white" | "black" | "primary";
}
export const PlusIcon: FC<PlusIconProps> = memo(
  ({ color = "black" }: PlusIconProps) => {
    const classes = [COLOR_CLASSES[color]].join(" ");
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("h-5 w-5", classes)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    );
  }
);

PlusIcon.displayName = "PlusIcon";
