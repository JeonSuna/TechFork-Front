import { cn } from "../lib/cn";
import Search from "@/assets/icons/search.svg";
import User from "@/assets/images/user.png";
import { Button } from "./button/Button";

export const SystemHeader = () => {
  return (
    <header
      className={cn("flex gap-2 items-center pb-5 pt-7 bg-white -mx-14 px-14")}
    >
      <div className="flex items-center justify-between w-full">
        <img
          src="/src/assets/images/logo.png"
          alt="로고"
          className="w-35 h-12"
        />
        <div className="w-160 flex  bg-bgPrimary rounded-lg border border-bgNormal px-3">
          <img src={Search} alt="" className="search" />
          <input
            type="text"
            placeholder="검색어 또는 태그명 입력"
            className="w-full px-3 py-2    focus:outline-none outline-none"
          />
        </div>
        <div className="flex gap-4">
          <Button size={"sm"} className="body-r-14 w-30 py-2">
            회원가입/로그인
          </Button>
          <img src={User} alt="mypage" className="size-10" />
        </div>
      </div>
    </header>
  );
};
