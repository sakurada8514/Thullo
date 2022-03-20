import { lazy } from "react";

export const BoardListPage = lazy(() =>
  import("./BoardList.page").then((m) => ({ default: m.BoardListPage }))
);
