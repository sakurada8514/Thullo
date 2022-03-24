import clsx from "clsx";
import { FC, memo, ReactNode } from "react";
import { twcx } from "utils/objects/twcx";
import { LoadingIcon } from "../icon/LoadingIcon";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  wfull?: boolean;
  classes?: string;
}

export const BaseSubmitButton: FC<Props> = memo(
  ({ children, isLoading = false, wfull = false, classes = "" }: Props) => (
    <button
      type="submit"
      className={clsx(
        wfull && "w-full",
        isLoading && "cursor-not-allowed",
        "rounded-lg bg-primary text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-primary-dark focus:outline-none",
        twcx("py-2 px-4 text-base", classes)
      )}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex justify-center">
          <LoadingIcon color="white" />
        </div>
      ) : (
        children
      )}
    </button>
  )
);

BaseSubmitButton.displayName = "BaseSubmitButton";
