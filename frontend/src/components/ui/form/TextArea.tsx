import { FC } from "react";
import { Formik } from "types/formik";

interface Props {
  name: string;
  placeholder?: string;
  id: string;
  cols?: number;
  rows?: number;
  formik: Formik;
}

export const TextArea: FC<Props> = ({
  name,
  id,
  cols = 30,
  rows = 10,
  placeholder = "",
  formik,
}: Props) => (
  <textarea
    name={name}
    id={id}
    placeholder={placeholder}
    cols={cols}
    rows={rows}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="w-full flex-1 appearance-none rounded-md border border-gray-200 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
  />
);
