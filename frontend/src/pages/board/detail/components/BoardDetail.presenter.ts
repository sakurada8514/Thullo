import { VALIDATE_MESSAGE } from "config/error";
import { SWR_KEYS } from "config/swr";
import {
  ListCreateRequest,
  ListFormValue,
  toListCreateRequest,
} from "models/list/list.model";
import { FC, useEffect, useMemo, useState } from "react";
import { fetchBoardDetail } from "services";
import useSWR from "swr";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MESSAGE } from "config/error/message";
import { toast } from "react-toastify";
import { hideLoading, showLoading } from "libs/loading";

interface Args {
  doCreateList: (reqest: ListCreateRequest) => Promise<void>;
  boardsId?: number;
}

export const useBoardDetailPresenter = ({ doCreateList, boardsId }: Args) => {
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
    showLoading();
    if (typeof boardsId === "undefined") {
      toast.error(MESSAGE.serverError);
      return;
    }
    await doCreateList(toListCreateRequest(values, boardsId));
    setShowListForm(false);
    hideLoading();
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
