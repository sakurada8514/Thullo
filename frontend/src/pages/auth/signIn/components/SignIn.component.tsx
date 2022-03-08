import { FC } from "react";
import { MialIcon } from "components/ui/icon/MailIcon";
import { KeyIcon } from "components/ui/icon/KeyIcon";
import { BaseSubmitButton } from "components/ui/button/BaseSubmitButton";
import { IconInput } from "components/ui/form/IconInput";
import { AuthFormLayout } from "components/layout/AuthFormLayout";
import { LinkTextButton } from "components/ui/button/LinkTextButton";
import { ValidationErrorMessage } from "components/ui/form/ValidationErrorMessage";
import { UserSignInRequest } from "models";
import { ErrorAlert } from "components/ui/alert/ErrorAlert";
import { useSignInPresenter } from "./SignIn.presenter";

interface Props {
  doSignIn: (reqest: UserSignInRequest) => Promise<void>;
  isUnAuthError: boolean;
}
export const SignIn: FC<Props> = ({ doSignIn, isUnAuthError }: Props) => {
  const { formik, isLoading } = useSignInPresenter({ doSignIn });
  return (
    <AuthFormLayout formName="SignIn">
      <div className="">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <ErrorAlert isShow={isUnAuthError}>
            ログインに失敗しました。メールアドレス、パスワードをご確認の上、再度お試しください。
          </ErrorAlert>

          <div className="mb-6">
            <IconInput
              icon={<MialIcon />}
              id="email"
              name="email"
              placeholder="Your email"
              formik={formik}
            />
            <ValidationErrorMessage
              touched={formik.touched.email}
              error={formik.errors.email}
            />
          </div>
          <div className="mb-6">
            <IconInput
              icon={<KeyIcon />}
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              formik={formik}
            />
            <ValidationErrorMessage
              touched={formik.touched.password}
              error={formik.errors.password}
            />
          </div>
          <div className="mb-6 -mt-4 flex items-center">
            <LinkTextButton to="/">Forgot Your Password?</LinkTextButton>
          </div>
          <div className="flex w-full">
            <BaseSubmitButton isLoading={isLoading} wfull>
              SignIn
            </BaseSubmitButton>
          </div>
        </form>
        <div className="mt-4 flex items-center justify-center">
          <LinkTextButton to="/signup">
            You do not have an account ?
          </LinkTextButton>
        </div>
      </div>
    </AuthFormLayout>
  );
};
