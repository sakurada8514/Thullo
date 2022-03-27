import { User } from "models/user";

export const PUBLIC_SCOPE_TYPE = {
  0: "Private",
  1: "Public",
} as { [key: string]: string };
type PublicScopeType = "0" | "1";

export interface Board {
  id: number;
  boardName: string;
  boardDiscription: string;
  image: string;
  adminUserId: number;
  publicScopeType: PublicScopeType;
  members: BoardMember[];
}

export interface BoardMember {
  id: number;
  name: string;
  icon?: string;
}

export interface BoardCreateFormValue {
  boardName: string;
  boardDiscription: string;
  image: string;
  publicScopeType: PublicScopeType;
}
export interface BoardCreateRequest {
  boardName: string;
  boardDiscription: string;
  image: string;
  publicScopeType: PublicScopeType;
}

export const toBoardCreateRequest = (values: BoardCreateFormValue) =>
  ({
    boardName: values.boardName,
    boardDiscription: values.boardDiscription,
    image: values.image,
    publicScopeType: values.publicScopeType,
  } as BoardCreateRequest);
