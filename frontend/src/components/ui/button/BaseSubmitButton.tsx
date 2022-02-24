import clsx from "clsx";
import { FC, memo, ReactNode } from "react";

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
        isLoading && "opacity-10",
        "rounded-lg bg-primary py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-primary-dark focus:outline-none"
      )}
    >
      {children}
    </button>
  )
);

BaseSubmitButton.displayName = "BaseSubmitButton";
