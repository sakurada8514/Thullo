export interface List {
  listName: string;
  boardId: number;
}

export type ListFormValue = List;

export type ListCreateRequest = List;

export const toListCreateRequest = (values: ListFormValue) =>
  ({
    listName: values.listName,
    boardId: values.boardId,
  } as ListCreateRequest);
