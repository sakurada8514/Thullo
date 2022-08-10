import { VALIDATE_MESSAGE } from "config/error";
import {
  ListCreateRequest,
  ListFormValue,
  toListCreateRequest,
} from "models/list/list.model";
import { useContext, useMemo, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MESSAGE } from "config/error/message";
import { toast } from "react-toastify";
import { LoadingContext } from "components/provider/LoadingProvider";

interface Args {
  doCreateList: (reqest: ListCreateRequest) => Promise<void>;
  boardsId?: number;
}

export const useBoardDetailPresenter = ({ doCreateList, boardsId }: Args) => {
  const { setIsLoading } = useContext(LoadingContext);
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
    setIsLoading(true);
    if (typeof boardsId === "undefined") {
      toast.error(MESSAGE.serverError);
      return;
    }
    await doCreateList(toListCreateRequest(values, boardsId));
    setShowListForm(false);
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
    handleShowListForm,
    handleCloseListForm,
  };
};
