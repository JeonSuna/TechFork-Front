import Arrow from "@assets/icons/arrow_right.svg";
import type { LucideIcon } from "lucide-react";
interface SettingListProps {
  icon: LucideIcon;
  label: string;
  isArrow?: boolean;
  onClick?: () => void;
}

export const SettingList = ({
  icon: Icon,
  label,
  isArrow,
  onClick,
}: SettingListProps) => {
  return (
    <div
      className="flex gap-4 items-center py-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-blue-50 size-11 rounded-sm flex items-center justify-center text-blue-500">
        <Icon size={20} aria-label={label} />
      </div>
      <p className="">{label}</p>
      {isArrow && <img src={Arrow} alt={label} className="ml-auto " />}
    </div>
  );
};
