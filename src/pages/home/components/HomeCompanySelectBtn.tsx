import User from "@/assets/images/user.png";
import Close from "@/assets/icons/close.svg";
import { useCompanyStore } from "../../../store/uesCompanyStore";

interface HomeCompanySelectBtnProps {
  company: string;
  onClick: () => void;
}

export const HomeCompanySelectBtn = ({
  company,
  onClick,
}: HomeCompanySelectBtnProps) => {
  const { toggleCompany } = useCompanyStore();

  return (
    <div
      className="flex gap-2 items-center py-2 px-3 border border-bgNormal bg-white w-fit rounded-[20px]"
      onClick={onClick}
    >
      <img src={User} alt="company" className="size-6" />
      <p className="body-r-14">{company}</p>
      <img
        src={Close}
        alt="close button"
        onClick={() => toggleCompany(company)}
      />
    </div>
  );
};
