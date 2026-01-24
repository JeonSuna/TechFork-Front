import User from "@/assets/images/user.png";
import Dot from "@/assets/icons/dot.svg";
import { cn } from "../../../utils/cn";
interface CompanyItemProps {
  company?: string;
  img?: string;
  newDot?: boolean;
  selected: boolean;
  onClick?: () => void;
}
export const CompanyItem = ({
  company = "company",
  newDot = false,
  selected = true,
  onClick,
}: CompanyItemProps) => {
  return (
    <div className="flex flex-col w-fit items-center justify-center relative cursor-pointer">
      {newDot && (
        <img src={Dot} alt="new post" className="absolute -top-2 right-0" />
      )}
      <div
        className={cn(
          "p-3 rounded-2xl  border-bgNormal  bg-white border-2 mb-2",
          selected && "border-blue-500 shadow-ds150 border-2",
        )}
        onClick={onClick}
      >
        <img src={User} alt="company" className="size-8" />
      </div>
      <p className="body-r-14">{company}</p>
    </div>
  );
};
