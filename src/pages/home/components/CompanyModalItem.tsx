import User from "@/assets/images/user.png";
interface CompanyModalItemProps {
  company?: string;
  img?: string;
}
export const CompanyModalItem = ({
  company = "company",
  img,
}: CompanyModalItemProps) => {
  return (
    <div className="flex flex-col  items-center   border border-transparent justify-center hover:border hover:border-blue-500 py-2.5 px-4 hover:bg-blue-50 rounded-2xl overflow-hidden">
      <div className="p-4 rounded-2xl border border-bgNormal  bg-white  ">
        <img src={User} alt="company" className="shrink-0 size-9" />
      </div>
      <p
        className="body-r-14 text-center h-10 line-clamp-2  wrap-break-word
    break-all"
      >
        {company}
      </p>
    </div>
  );
};
