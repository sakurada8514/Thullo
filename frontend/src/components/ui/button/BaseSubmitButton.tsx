import clsx from "clsx";
import { FC, memo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  wfull?: boolean;
}

export const BaseSubmitButton: FC<Props> = memo(
  ({ children, wfull = false }: Props) => (
    <button
      type="submit"
      className={clsx(
        wfull && "w-full",
        "rounded-lg bg-primary py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
      )}
    >
      {children}
    </button>
  )
);

BaseSubmitButton.displayName = "BaseSubmitButton";
