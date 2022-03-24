import { UNSPLASH_ACCESS_KEY } from "config/api";
import { createApi } from "unsplash-js";

export const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
});
