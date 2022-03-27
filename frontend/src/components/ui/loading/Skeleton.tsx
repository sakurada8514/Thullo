import clsx from "clsx";
import { FC, memo } from "react";

interface SkeletonProps {
  w?: string;
  h?: string;
  classes?: string;
}
export const Skeleton: FC<SkeletonProps> = memo(
  ({ w = "w-full", h = "h-full", classes = "" }: SkeletonProps) => (
    <div
      className={clsx(
        "animate-pulse overflow-hidden rounded-lg bg-gray-200 p-3",
        w,
        h,
        classes
      )}
    />
  )
);
Skeleton.displayName = "Skeleton";
