import clsx from "clsx";
import { memo, ReactNode, useEffect } from "react";
import { CrossIcon } from "../icon/CrossIcon";
import { InfoIcon } from "../icon/InfoIcon";

const TYPE_CLASSES = {
  success: "border-teal-500 bg-teal-100 text-teal-900",
  error: "border-red-500 bg-red-100 text-red-900",
} as { [key: string]: string };
const TYPE_ICON = {
  success: <InfoIcon color="green" />,
  error: <InfoIcon color="red" />,
} as { [key: string]: ReactNode };
const TYPE_HEAD = {
  success: "Success !",
  error: "Error !",
} as { [key: string]: string };

export const FlashAlert = memo(() => (
  // const flashInfo = flashSelectors.flashInfo();
  // const resetFlash = flashActions.resetFlash();
  // const handleClose = () => {
  //   resetFlash();
  // };
  // useEffect(() => {
  //   if (flashInfo) {
  //     setTimeout(() => {
  //       resetFlash();
  //     }, 3000);
  //   }
  // }, [flashInfo]);

  <>
    {/* {flashInfo ? (
        <div
          className={clsx(
            "fixed left-1/2 bottom-4 w-11/12 max-w-md -translate-x-1/2 rounded-b border-t-4 px-4 py-3 shadow-md transition md:left-4 md:-translate-x-0",
            TYPE_CLASSES[flashInfo.type]
          )}
          role="alert"
        >
          <div className="flex justify-between">
            <div className="flex">
              <div className="mr-4 py-1">{TYPE_ICON[flashInfo.type]}</div>
              <div>
                <p className="font-bold">{TYPE_HEAD[flashInfo.type]}</p>
                <p className="text-sm">{flashInfo.message}</p>
              </div>
            </div>
            <div className="ml-4">
              <button type="button" onClick={handleClose}>
                <CrossIcon color="black" />
              </button>
            </div>
          </div>
        </div>
      ) : null} */}
  </>
));

FlashAlert.displayName = "FlashAlert";
