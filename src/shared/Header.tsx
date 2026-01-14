import { useNavigate } from "react-router-dom";
import { cn } from "../lib/cn";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header
      className={cn("flex gap-2 items-center pb-23  w-full  ", className)}
    >
      <img
        src="/src/assets/images/logo.png"
        alt="로고"
        className="w-35 h-12 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <p className="subtitle-sb-20">통합 로그인</p>
    </header>
  );
};
