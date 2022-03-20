import clsx from "clsx";
import { FC, memo, ReactNode } from "react";
import { twcx } from "utils/objects/twcx";
import { LoadingIcon } from "../icon/LoadingIcon";

interface Props {
  children: ReactNode;
  //   isLoading?: boolean;
  wfull?: boolean;
  classes?: string;
  handleClick?: () => void;
}

export const BaseButton: FC<Props> = memo(
  ({ children, wfull = false, classes = "", handleClick }: Props) => (
    <button
      onClick={handleClick}
      type="button"
      className={clsx(
        wfull && "w-full",
        // isLoading && "cursor-not-allowed",
        "rounded-lg bg-primary text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-primary-dark focus:outline-none",
        twcx("px-4 py-2 text-base", classes)
      )}
      //   disabled={isLoading}
    >
      {/* {isLoading ? (
        <div className="flex justify-center">
          <LoadingIcon color="white" />
        </div>
      ) : ( */}
      {children}
      {/* )} */}
    </button>
  )
);

BaseButton.displayName = "BaseButton";
