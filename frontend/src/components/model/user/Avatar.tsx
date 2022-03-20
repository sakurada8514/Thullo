import clsx from "clsx";
import { FC, memo } from "react";

interface AvatarProps {
  name: string;
  icon?: string;
}
export const Avatar: FC<AvatarProps> = memo(({ name, icon }: AvatarProps) => {
  const iconName = name?.substring(0, 1);
  return (
    <div className={clsx("rounded-lg bg-gray-300", !icon && "p-1")}>
      {icon ? (
        <img className="h-8 w-8 rounded-lg" src={icon} alt="icon" />
      ) : (
        <p className="h-6 w-6 text-center text-white">{iconName}</p>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";
