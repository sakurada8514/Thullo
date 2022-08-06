import { BaseSubmitButton } from "components/ui/button/BaseSubmitButton";
import { Input } from "components/ui/form/Input";
import { SelectWithIcon } from "components/ui/form/SelectWithIcon";
import { TextArea } from "components/ui/form/TextArea";
import { ValidationErrorMessage } from "components/ui/form/ValidationErrorMessage";
import { LookCloseIcon } from "components/ui/icon/LookCloseIcon";
import { LookOpenIcon } from "components/ui/icon/LookOpenIcon";
import { PlusIcon } from "components/ui/icon/PlusIcon";
import { Skeleton } from "components/ui/loading/Skeleton";
import { BaseModal } from "components/ui/modal/BaseModal";
import { BoardCreateRequest, PUBLIC_SCOPE_TYPE } from "models/board";
import { FC, memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useBoardCreatePresenter } from "./BoardCreate.presenter";

interface BoardCreateProps {
  initImage: string | undefined;
  doCreateBoard: (reqest: BoardCreateRequest) => Promise<void>;
}

const PUBLIC_SCOPE_TYPE_ICON = {
  0: <LookCloseIcon />,
  1: <LookOpenIcon />,
} as { [key: string]: ReactNode };

export const BoardCreate: FC<BoardCreateProps> = memo(
  ({ initImage, doCreateBoard }: BoardCreateProps) => {
    const { handleCloseNavigate, formik, isLoading } = useBoardCreatePresenter({
      initImage,
      doCreateBoard,
    });

    return (
      <BaseModal handleClose={handleCloseNavigate} maxWidth="lg">
        {initImage ? (
          <img
            src={initImage}
            alt=""
            width="800"
            height="200"
            className="mb-8 h-32 w-full rounded-lg object-cover"
          />
        ) : (
          <Skeleton w="w-full" h="h-32" classes="mb-8" />
        )}
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="mb-4">
            <Input
              id="boardName"
              name="boardName"
              placeholder="Board Name"
              formik={formik}
            />
            <ValidationErrorMessage
              touched={formik.touched.boardName}
              error={formik.errors.boardName}
            />
          </div>
          <div className="mb-3">
            <TextArea
              placeholder="Board Discription"
              name="boardDescription"
              id="boardDescription"
              formik={formik}
              rows={5}
            />
            <ValidationErrorMessage
              touched={formik.touched.boardDescription}
              error={formik.errors.boardDescription}
            />
          </div>
          <div className="mb-6 w-3/5 md:w-1/2">
            <SelectWithIcon
              name="publicScopeType"
              id="publicScopeType"
              formik={formik}
              icon={PUBLIC_SCOPE_TYPE_ICON[formik.values.publicScopeType]}
            >
              {Object.keys(PUBLIC_SCOPE_TYPE).map((key) => (
                <option key={key} value={key}>
                  {PUBLIC_SCOPE_TYPE[key]}
                </option>
              ))}
            </SelectWithIcon>
            <ValidationErrorMessage
              touched={formik.touched.publicScopeType}
              error={formik.errors.publicScopeType}
            />
          </div>
          <div className="flex items-center justify-around px-6 md:px-12">
            <Link to="/board/list" className="w-24 text-center text-gray-400">
              Cancel
            </Link>
            <BaseSubmitButton classes="flex items-center" isLoading={isLoading}>
              <PlusIcon />
              <span className="ml-2">Create</span>
            </BaseSubmitButton>
          </div>
        </form>
      </BaseModal>
    );
  }
);
BoardCreate.displayName = "BoardCreate";
