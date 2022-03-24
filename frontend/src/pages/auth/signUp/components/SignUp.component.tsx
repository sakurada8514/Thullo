import { FC } from "react";
import { MialIcon } from "components/ui/icon/MailIcon";
import { KeyIcon } from "components/ui/icon/KeyIcon";
import { BaseSubmitButton } from "components/ui/button/BaseSubmitButton";
import { IconInput } from "components/ui/form/IconInput";
import { AuthFormLayout } from "components/layout/AuthFormLayout";
import { GoogleButton } from "components/ui/button/GoogleButton";
import { LinkTextButton } from "components/ui/button/LinkTextButton";
import { UserIcon } from "components/ui/icon/UserIcon";
import { ValidationErrorMessage } from "components/ui/form/ValidationErrorMessage";
import { useSignUpPresenter } from "pages/auth/signUp/components/SignUp.presenter";
import { UserSignUpRequest } from "models";
import { ErrorAlert } from "components/ui/alert/ErrorAlert";

interface Props {
  doSginUp: (reqest: UserSignUpRequest) => Promise<void>;
  errorMessage: string;
}
export const SignUp: FC<Props> = ({ doSginUp, errorMessage }: Props) => {
  const { formik, isLoading } = useSignUpPresenter({ doSginUp });
  return (
    <AuthFormLayout formName="SignUp">
      <div>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}

          <div className="mb-6">
            <IconInput
              icon={<UserIcon />}
              id="name"
              name="name"
              placeholder="Your name"
              formik={formik}
            />
            <ValidationErrorMessage
              touched={formik.touched.name}
              error={formik.errors.name}
            />
          </div>
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
          <div className="mb-6">
            <IconInput
              icon={<KeyIcon />}
              id="password_confirm"
              name="passwordConfirm"
              type="password"
              placeholder="Your password confirm"
              formik={formik}
            />
            <ValidationErrorMessage
              touched={formik.touched.passwordConfirm}
              error={formik.errors.passwordConfirm}
            />
          </div>
          <div className="flex w-full">
            <BaseSubmitButton isLoading={isLoading} wfull>
              SignUp
            </BaseSubmitButton>
          </div>
        </form>
      </div>
      {/* <div className="relative mt-6 border-t-2 border-gray-200 pt-6">
        <p className="absolute -top-6 left-1/2 my-3 -translate-x-1/2 transform bg-white px-1 text-center text-gray-500">
          OR
        </p>
        <GoogleButton />
      </div> */}
      <div className="mt-4 flex items-center justify-center">
        <LinkTextButton to="/signin">Have an account?</LinkTextButton>
      </div>
    </AuthFormLayout>
  );
};
