import { BarsLoading } from "components/ui/loading/BarsLoading";

export const Loading = () => (
  <div
    id="loading"
    className="fixed top-0 left-0 hidden h-screen w-screen items-center justify-center bg-black bg-opacity-40"
  >
    <BarsLoading />
  </div>
);

export const showLoading = () => {
  document.getElementById("loading")!.style.display = "flex";
};
export const hideLoading = () => {
  document.getElementById("loading")!.style.display = "none";
};
