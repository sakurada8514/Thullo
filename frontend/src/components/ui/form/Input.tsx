import { FC } from "react";
import { Formik } from "types/formik";

interface Props {
  name: string;
  placeholder?: string;
  id: string;
  type?: string;
  formik: Formik;
}

export const Input: FC<Props> = ({
  name,
  id,
  type = "text",
  placeholder = "",
  formik,
}: Props) => (
  <input
    name={name}
    type={type}
    id={id}
    className="w-full flex-1 appearance-none rounded-md border border-gray-200 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
    placeholder={placeholder}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
);
