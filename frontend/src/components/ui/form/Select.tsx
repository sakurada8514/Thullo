import { FC, ReactNode } from "react";
import { Formik } from "types/formik";

interface Props {
  name: string;
  id: string;
  formik: Formik;
  children: ReactNode;
}
export const Select: FC<Props> = ({ name, id, formik, children }: Props) => (
  <select
    name={name}
    id={id}
    className="h-full w-full flex-1 appearance-none border-none bg-gray-200 text-lg text-gray-500  focus:outline-none focus:ring-0"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  >
    {children}
  </select>
);
