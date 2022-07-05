import { VALIDATE_MESSAGE } from "config/error";
import { useFormik } from "formik";
import {
  BoardCreateFormValue,
  BoardCreateRequest,
  toBoardCreateRequest,
} from "models/board";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface Args {
  initImage: string | undefined;
  doCreateBoard: (reqest: BoardCreateRequest) => Promise<void>;
}

export const useBoardCreatePresenter = ({ initImage, doCreateBoard }: Args) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValues = useMemo(
    () =>
      ({
        boardName: "",
        boardDiscription: "",
        publicScopeType: "0",
        image: initImage,
      } as BoardCreateFormValue),
    [initImage]
  );

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        boardName: Yup.string()
          .max(256, VALIDATE_MESSAGE.LENGTH_MAX(256))
          .required(VALIDATE_MESSAGE.REQUIRED("ボード名")),
        boardDiscription: Yup.string().required(
          VALIDATE_MESSAGE.REQUIRED("ボード説明")
        ),
        publicScopeType: Yup.number().required(
          VALIDATE_MESSAGE.REQUIRED("公開タイプ")
        ),
        image: Yup.string().required(VALIDATE_MESSAGE.REQUIRED("画像")),
      }),
    []
  );

  const handleSubmit = async (values: BoardCreateFormValue) => {
    setIsLoading(true);
    doCreateBoard(toBoardCreateRequest(values));
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
  const navigate = useNavigate();

  const handleCloseNavigate = () => {
    navigate("/board/list");
  };
  return { formik, isLoading, handleCloseNavigate };
};
