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
  green: "text-teal-500",
  red: "text-red-500",
} as { [key: string]: string };

interface InfoIconProps {
  size?: "sm" | "md" | "lg";
  color?: "white" | "black" | "green" | "primary" | "red";
}
export const InfoIcon: FC<InfoIconProps> = memo(
  ({ size = "md", color = "primary" }: InfoIconProps) => {
    const classes = [SIZE_CLASSES[size], COLOR_CLASSES[color]].join(" ");
    return (
      <svg
        className={clsx("fill-current", classes)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
      </svg>
    );
  }
);

InfoIcon.displayName = "InfoIcon";
