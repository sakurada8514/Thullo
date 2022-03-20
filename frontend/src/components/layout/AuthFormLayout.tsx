import { LogoIcon } from "components/ui/icon/LogoIcon";
import { FC, memo, ReactNode } from "react";

interface Props {
  formName: string;
  children: ReactNode;
}
export const AuthFormLayout: FC<Props> = ({ formName, children }: Props) => (
  <>
    <div className="h-full min-h-screen w-full bg-blue-50 px-5 py-14">
      <div className="mb-12 flex justify-center">
        <LogoIcon size="lg" />
      </div>
      <div className="bg-whit mx-auto flex w-full max-w-md flex-col rounded-lg bg-white px-4 py-8 shadow sm:px-6 md:px-8 lg:px-10">
        <div className="mb-8 self-center text-2xl font-medium text-gray-600 sm:text-3xl">
          {formName}
        </div>
        {children}
      </div>
    </div>
  </>
);
AuthFormLayout.displayName = "AuthFormLayout";
