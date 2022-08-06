import clsx from "clsx";
import { FC, memo } from "react";

interface AvatarProps {
  name: string;
  icon?: string;
  classes?: string;
}
export const Avatar: FC<AvatarProps> = memo(
  ({ name, icon, classes }: AvatarProps) => {
    const iconName = name?.substring(0, 1);
    return (
      <div
        className={clsx(
          "h-9 w-9 rounded-lg bg-gray-300",
          !icon && "p-1",
          classes
        )}
      >
        {icon ? (
          <img
            className="h-8 w-8 rounded-lg object-cover "
            src={icon}
            alt="icon"
          />
        ) : (
          <p className="h-full w-full text-center text-gray-500">{iconName}</p>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
