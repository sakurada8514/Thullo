export interface List {
  listName: string;
  boardsId: number;
}

export interface ListFormValue {
  listName: string;
}

export type ListCreateRequest = List;

export const toListCreateRequest = (values: ListFormValue, boardsId: number) =>
  ({
    listName: values.listName,
    boardsId,
  } as ListCreateRequest);
