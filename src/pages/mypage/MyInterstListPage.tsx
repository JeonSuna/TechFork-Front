import { useState } from "react";
import { MYPAGE_TAP } from "../../constants/tab";
import { TabSelectList } from "../home/components/TabSelectList";
import { CardItem } from "../../shared/CardItem";

// mypage 관심사 list
export const MyIntersListPage = () => {
  const [selectedTab, setSelected] = useState(0);
  return (
    <div className="py-12">
      <TabSelectList
        className="mb-20"
        onChange={setSelected}
        selected={selectedTab}
        tagList={MYPAGE_TAP}
      />
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
