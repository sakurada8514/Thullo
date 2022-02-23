import { VALIDATE_MESSAGE } from "config/error/validationErrorMessage";
import { useFormik } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export const useSignUpPresenter = () => {
  const initialValues = useMemo(
    () =>
      ({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      } as FormValues),
    []
  );

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string()
          .max(64, VALIDATE_MESSAGE.LENGTH_MAX(64))
          .required(VALIDATE_MESSAGE.REQUIRED("名前")),
        email: Yup.string()
          .email(VALIDATE_MESSAGE.EMAIL)
          .max(256, VALIDATE_MESSAGE.LENGTH_MAX(256))
          .required(VALIDATE_MESSAGE.REQUIRED("メールアドレス")),
        password: Yup.string()
          .max(256, VALIDATE_MESSAGE.LENGTH_MAX(256))
          .required(VALIDATE_MESSAGE.REQUIRED("パスワード")),
        passwordConfirm: Yup.string()
          .required(VALIDATE_MESSAGE.REQUIRED("パスワード確認"))
          .oneOf(
            [Yup.ref("password"), null],
            VALIDATE_MESSAGE.PASSWORD_CONFIRM
          ),
      }),
    []
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};
