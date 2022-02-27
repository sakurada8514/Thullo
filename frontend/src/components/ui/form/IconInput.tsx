import { FC, ReactNode } from "react";
import { Formik } from "types/formik";

interface Props {
  icon: ReactNode;
  name: string;
  placeholder?: string;
  id: string;
  type?: string;
  formik: Formik;
}

export const IconInput: FC<Props> = ({
  icon,
  name,
  id,
  type = "text",
  placeholder = "",
  formik,
}: Props) => (
  <div className="relative flex ">
    <span className="inline-flex items-center  rounded-l-md border-t border-l border-b border-gray-300 bg-white  px-3 text-sm text-gray-500 shadow-sm">
      {icon}
    </span>
    <input
      name={name}
      type={type}
      id={id}
      className=" w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder={placeholder}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  </div>
);
