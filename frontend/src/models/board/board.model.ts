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
}

export interface BoardCreateFormValue {
  boardName: string;
  boardDiscription: string;
  image: string;
  publicScopeType: PublicScopeType;
}
