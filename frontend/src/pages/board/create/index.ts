import { lazy } from "react";

export const BoardCreatePage = lazy(() =>
  import("./BoardCreate.page").then((m) => ({ default: m.BoardCreatePage }))
);
