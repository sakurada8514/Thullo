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
        className={clsx("cursor-pointer", classes)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }
);

CrossIcon.displayName = "CrossIcon";
