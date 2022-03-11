import { VALIDATE_MESSAGE } from "config/error";
import { useFormik } from "formik";
import {
  toUserSignUpRequest,
  UserSignUpFormValues,
  UserSignUpRequest,
} from "models";
import { useMemo, useState } from "react";
import * as Yup from "yup";

interface Args {
  doSginUp: (reqest: UserSignUpRequest) => Promise<void>;
}

export const useSignUpPresenter = ({ doSginUp }: Args) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValues = useMemo(
    () =>
      ({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      } as UserSignUpFormValues),
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
          .min(8, VALIDATE_MESSAGE.LENGTH_MIN(8))
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

  const handleSubmit = async (values: UserSignUpFormValues) => {
    setIsLoading(true);
    await doSginUp(toUserSignUpRequest(values));
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
