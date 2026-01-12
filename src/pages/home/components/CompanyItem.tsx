import User from "@/assets/images/user.png";
import Dot from "@/assets/icons/dot.svg";
interface CompanyItemProps {
  company?: string;
  img?: string;
  newDot?: boolean;
}
export const CompanyItem = ({
  company = "company",
  newDot = false,
  img,
}: CompanyItemProps) => {
  return (
    <div className="flex flex-col w-fit items-center justify-center relative">
      {newDot && (
        <img src={Dot} alt="new post" className="absolute -top-2 right-0" />
      )}
      <div className="p-4 rounded-2xl border border-bgNormal  bg-white  ">
        <img src={User} alt="company" />
      </div>
      <p className="body-r-14">{company}</p>
    </div>
  );
};
