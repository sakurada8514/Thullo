import { User } from "models/user";

export const PUBLIC_SCOPE_TYPE = {
  only_member: "Private",
  published: "Public",
} as { [key: string]: string };
type PublicScopeType = "only_member" | "published";

export interface Board {
  id: number;
  boardName: string;
  boardDescription: string;
  image: string;
  adminUserId: number;
  publicScopeType: PublicScopeType;
  users: BoardMember[];
}

export interface BoardMember {
  id: number;
  name: string;
  icon?: string;
}

export interface BoardCreateFormValue {
  boardName: string;
  boardDescription: string;
  image: string;
  publicScopeType: PublicScopeType;
}
export interface BoardCreateRequest {
  boardName: string;
  boardDescription: string;
  image: string;
  publicScopeType: PublicScopeType;
}

export const toBoardCreateRequest = (values: BoardCreateFormValue) =>
  ({
    boardName: values.boardName,
    boardDescription: values.boardDescription,
    image: values.image,
    publicScopeType: values.publicScopeType,
  } as BoardCreateRequest);
