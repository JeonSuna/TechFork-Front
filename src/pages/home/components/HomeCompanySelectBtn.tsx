import User from "@/assets/images/user.png";
import Close from "@/assets/icons/close.svg";

export const HomeCompanySelectBtn = () => {
  return (
    <div className="flex gap-2 items-center py-2 px-3 border border-bgNormal bg-white w-fit rounded-[20px]">
      <img src={User} alt="company" className="size-6" />
      <p className="body-r-14">NAVER</p>
      <img src={Close} alt="close button" />
    </div>
  );
};
