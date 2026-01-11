import { Outlet } from "react-router-dom";
import { SystemHeader } from "../shared/SystemHeader";

export const SystemLayout = () => {
  return (
    <div className="  flex flex-col items-center mt-7">
      <SystemHeader />
      <Outlet />
    </div>
  );
};
