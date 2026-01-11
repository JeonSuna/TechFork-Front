import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../shared/Header";
import clsx from "clsx";

export const OnboardingLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="  flex flex-col items-center mt-7">
      <Header className={clsx(pathname === "/login" ? "pb-24" : "pb-2")} />
      <Outlet />
    </div>
  );
};
