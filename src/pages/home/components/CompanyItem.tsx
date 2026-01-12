import User from "@/assets/images/user.png";
interface CompanyItemProps {
  company?: string;
  img?: string;
}
export const CompanyItem = ({ company = "company", img }: CompanyItemProps) => {
  return (
    <div className="flex flex-col w-fit items-center justify-center">
      <div className="p-4 rounded-2xl border border-bgNormal  bg-white  ">
        <img src={User} alt="company" />
      </div>
      <p className="body-r-14">{company}</p>
    </div>
  );
};
