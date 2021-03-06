import Icon from "images/Logo-small.svg";
import { FC, memo } from "react";

const SIZE_CLASSES = {
  sm: "h-4 w-12",
  md: "h-10 w-30",
  lg: "h-16 w-48",
} as { [key: string]: string };

interface Props {
  size?: "sm" | "md" | "lg";
}

export const LogoIcon: FC<Props> = memo(({ size = "md" }: Props) => (
  <img src={Icon} alt="" className={SIZE_CLASSES[size]} />
));

LogoIcon.displayName = "LogoIcon";
