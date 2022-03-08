import { FC, memo } from "react";

const SIZE = {
  sm: "24",
  md: "48",
  lg: "72",
} as { [key: string]: string };
const COLOR = {
  white: "#fff",
  primary: "#2E80ED",
} as { [key: string]: string };

interface Props {
  size?: "sm" | "md" | "lg";
  color?: "white" | "primary";
}
export const LoadingIcon: FC<Props> = memo(
  ({ size = "sm", color = "primary" }: Props) => (
    <svg
      width={SIZE[size]}
      height={SIZE[size]}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke={COLOR[color]}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  )
);

LoadingIcon.displayName = "LoadingIcon";
