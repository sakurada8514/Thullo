import { memo } from "react";
import ReactLoading from "react-loading";

export const BarsLoading = memo(() => (
  <ReactLoading type="bars" color="#2e80ed" />
));

BarsLoading.displayName = "BarsLoading";
