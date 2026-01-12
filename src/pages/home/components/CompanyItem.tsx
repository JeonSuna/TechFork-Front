import User from "@/assets/images/user.png";
import Dot from "@/assets/icons/dot.svg";
import { cn } from "../../../lib/cn";
interface CompanyItemProps {
  company?: string;
  img?: string;
  newDot?: boolean;
  selected: boolean;
}
export const CompanyItem = ({
  company = "company",
  newDot = false,
  img,
  selected = true,
}: CompanyItemProps) => {
  return (
    <div className="flex flex-col w-fit items-center justify-center relative">
      {newDot && (
        <img src={Dot} alt="new post" className="absolute -top-2 right-0" />
      )}
      <div
        className={cn(
          "p-4 rounded-2xl  border-bgNormal  bg-white border-2 ",
          selected && "border-blue-500 shadow-ds150 border-2",
        )}
      >
        <img src={User} alt="company" />
      </div>
      <p className="body-r-14">{company}</p>
    </div>
  );
};
