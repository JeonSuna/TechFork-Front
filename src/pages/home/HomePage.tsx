import { TabSelectList } from "./components/TabSelectList";

import { CardItem } from "../../shared/CardItem";
export const HomePage = () => {
  return (
    <div className="bg-bgPrimary pt-12 ">
      <TabSelectList className="mb-12" />
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
    </div>
  );
};
