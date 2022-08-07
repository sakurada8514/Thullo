import { VALIDATE_MESSAGE } from "config/error";
import { SWR_KEYS } from "config/swr";
import {
  ListCreateRequest,
  ListFormValue,
  toListCreateRequest,
} from "models/list/list.model";
import { FC, useMemo, useState } from "react";
import { fetchBoardDetail } from "services";
import useSWR from "swr";
import * as Yup from "yup";
import { useFormik } from "formik";

interface Args {
  doCreateList: (reqest: ListCreateRequest) => Promise<void>;
  boardId?: number;
}

export const useBoardDetailPresenter = ({ doCreateList, boardId }: Args) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showListForm, setShowListForm] = useState<boolean>(false);
  const handleShowListForm = () => {
    setShowListForm(true);
  };
  const handleCloseListForm = () => {
    setShowListForm(false);
  };
  const listInitialValues = useMemo(
    () =>
      ({
        listName: "",
        boardId,
      } as ListFormValue),
    []
  );

  const listValidationSchema = useMemo(
    () =>
      Yup.object().shape({
        listName: Yup.string()
          .max(256, VALIDATE_MESSAGE.LENGTH_MAX(256))
          .required(VALIDATE_MESSAGE.REQUIRED("リスト名")),
      }),
    []
  );

  const handleSubmit = async (values: ListFormValue) => {
    setIsLoading(true);
    doCreateList(toListCreateRequest(values));
    setIsLoading(false);
  };

  const listFormik = useFormik({
    enableReinitialize: true,
    initialValues: listInitialValues,
    validateOnMount: true,
    validationSchema: listValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return {
    listFormik,
    showListForm,
    isLoading,
    handleShowListForm,
    handleCloseListForm,
  };
};
