import { FC, memo } from "react";

interface ErrorAlertProps {
  headText?: string;
  children: string;
}
export const ErrorAlert: FC<ErrorAlertProps> = memo(
  ({ children, headText }: ErrorAlertProps) => (
    <div className="mb-4 border-l-4 border-red-500 bg-red-100 p-2 text-sm text-red-500">
      <p className="font-bold">{headText}</p>
      <p>{children}</p>
    </div>
  )
);

ErrorAlert.displayName = "ErrorAlert";
ErrorAlert.defaultProps = { headText: "Error !" };
