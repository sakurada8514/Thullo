import { FC, memo } from "react";

interface OverCountTextProps {
  overCount: number | null;
}
export const OverCountText: FC<OverCountTextProps> = memo(
  ({ overCount }: OverCountTextProps) => (
    <>
      {overCount ? (
        <p className=" text-sm text-gray-400">+ {overCount} others</p>
      ) : null}
    </>
  )
);

OverCountText.displayName = "OverCountText";
