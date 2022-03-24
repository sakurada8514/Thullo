import { FC, ReactNode } from "react";
import { Formik } from "types/formik";
import { Select } from "./Select";

interface Props {
  name: string;
  id: string;
  formik: Formik;
  children: ReactNode;
  icon: ReactNode;
}

export const SelectWithIcon: FC<Props> = ({
  icon,
  name,
  id,
  formik,
  children,
}: Props) => (
  <div className="flex w-full items-center rounded-md bg-gray-200 py-1 px-4">
    {icon}
    <Select name={name} id={id} formik={formik}>
      {children}
    </Select>
  </div>
);
