import clsx from "clsx";
import { BaseButton } from "components/ui/button/BaseButton";
import { CrossIcon } from "components/ui/icon/CrossIcon";
import { FC, ReactNode } from "react";

interface BaseModalProps {
  handleClose: () => void;
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export const BaseModal: FC<BaseModalProps> = ({
  handleClose,
  children,
  maxWidth = "md",
}: BaseModalProps) => (
  <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-10 pt-28">
    <div
      className={clsx(
        `max-w-${maxWidth}`,
        "absolute top-28 left-1/2 inline-block max-h-full w-11/12 -translate-x-1/2 transform rounded-lg bg-white"
      )}
    >
      <div className="relative p-6">
        <BaseButton
          handleClick={handleClose}
          classes="py-1 px-1 absolute top-3 right-3"
        >
          <CrossIcon color="white" />
        </BaseButton>
        {children}
      </div>
    </div>
  </div>
);
