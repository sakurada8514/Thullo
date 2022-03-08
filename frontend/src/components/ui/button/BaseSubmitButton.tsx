import clsx from "clsx";
import { FC, memo, ReactNode } from "react";
import { LoadingIcon } from "../icon/LoadingIcon";

interface Props {
  children: ReactNode;
  isLoading: boolean;
  wfull?: boolean;
}

export const BaseSubmitButton: FC<Props> = memo(
  ({ children, isLoading, wfull = false }: Props) => (
    <button
      type="submit"
      className={clsx(
        wfull && "w-full",
        isLoading && "cursor-not-allowed",
        "h-10 rounded-lg bg-primary px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-primary-dark focus:outline-none"
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
