import { Outlet } from "react-router-dom";
import { SystemHeader } from "../shared/SystemHeader";

export const SystemLayout = () => {
  return (
    <div className=" min-h-screen  flex flex-col  ">
      <SystemHeader />
      <Outlet />
    </div>
  );
};
