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
export interface UserSignUpFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export const toUserSignUpRequest = (value: UserSignUpFormValues) =>
  ({
    name: value.name,
    email: value.email,
    password: sha256(value.password),
  } as UserSignUpRequest);

export interface UserSignInRequest {
  email: string;
  password: string;
}
export interface UserSignInFormValues {
  email: string;
  password: string;
}
export const toUserSignInRequest = (value: UserSignInFormValues) =>
  ({
    email: value.email,
    password: sha256(value.password),
  } as UserSignInRequest);
