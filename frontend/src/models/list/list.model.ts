export interface List {
  listName: string;
  boardId: number;
}

export interface ListFormValue {
  listName: string;
  boardId: number;
}

export interface ListCreateRequest {
  listName: string;
  boardId: number;
}

export const toListCreateRequest = (values: ListFormValue) =>
  ({
    listName: values.listName,
    boardId: values.boardId,
  } as ListCreateRequest);
