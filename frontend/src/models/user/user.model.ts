import { sha256 } from "utils/hash";

export interface User {
  id: number;
  name: string;
  iconPath?: string;
}

export interface UserSignUpRequest {
  name: string;
  email: string;
  password: string;
}
export interface UserSignFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export const toUserSignUpRequest = (value: UserSignFormValues) =>
  ({
    name: value.name,
    email: value.email,
    password: sha256(value.password),
  } as UserSignUpRequest);
