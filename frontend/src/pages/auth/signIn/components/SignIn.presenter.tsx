import { VALIDATE_MESSAGE } from "config/error";
import { useFormik } from "formik";
import {
  toUserSignInRequest,
  UserSignInFormValues,
  UserSignInRequest,
} from "models";
import { useMemo, useState } from "react";
import * as Yup from "yup";

interface Args {
  doSignIn: (reqest: UserSignInRequest) => Promise<void>;
}
export const useSignInPresenter = ({ doSignIn }: Args) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValues = useMemo(
    () =>
      ({
        email: "",
        password: "",
      } as UserSignInFormValues),
    []
  );

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .email(VALIDATE_MESSAGE.EMAIL)
          .max(256, VALIDATE_MESSAGE.LENGTH_MAX(256))
          .required(VALIDATE_MESSAGE.REQUIRED("メールアドレス")),
        password: Yup.string()
          .min(8, VALIDATE_MESSAGE.LENGTH_MIN(8))
          .max(256, VALIDATE_MESSAGE.LENGTH_MAX(256))
          .required(VALIDATE_MESSAGE.REQUIRED("パスワード")),
      }),
    []
  );

  const handleSubmit = async (values: UserSignInFormValues) => {
    setIsLoading(true);
    await doSignIn(toUserSignInRequest(values));
    setIsLoading(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return { formik, isLoading };
};
