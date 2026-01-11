import { useState } from "react";
import { TabBtn } from "../../../shared/button/TabBtn";
import { TAB_MAP } from "../../../constants/tab";
import clsx from "clsx";

interface TabSelectList {
  className?: string;
}

export const TabSelectList = ({ className }: TabSelectList) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={clsx("flex justify-start", className)}>
      {TAB_MAP.map((item, idx) => {
        return (
          <TabBtn
            label={item}
            onClick={() => setSelected(idx)}
            selected={selected === idx}
          />
        );
      })}
    </div>
  );
};
