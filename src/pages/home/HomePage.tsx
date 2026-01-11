import { TabSelectList } from "./components/TabSelectList";
import BookOn from "@/assets/icons/book-on.svg";
import User from "@/assets/images/user.png";
export const HomePage = () => {
  return (
    <div className="bg-bgPrimary pt-12 ">
      <TabSelectList className="mb-12" />
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <li className="w-71 h-56 rounded-lg bg-white p-4">
          <div className="flex justify-between mb-4">
            <img src={User} alt="" className="size-10" />
            <img src={BookOn} alt="" />
          </div>
          <div className="flex flex-col gap-4 pb-4 border-b border-bgNormal">
            <h3>Title</h3>
            <p className="line-clamp-3">
              주절주절ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
