import { TabBtn } from "../../../shared/button/TabBtn";
import { TAB_MAP } from "../../../constants/tab";
import clsx from "clsx";

interface TabSelectList {
  className?: string;
  selected?: number;
  onChange: (idx: number) => void;
}

export const TabSelectList = ({
  className,
  selected,
  onChange,
}: TabSelectList) => {
  return (
    <div className={clsx("flex justify-start", className)}>
      {TAB_MAP.map((item, idx) => {
        return (
          <TabBtn
            label={item}
            onClick={() => onChange(idx)}
            selected={selected === idx}
          />
        );
      })}
    </div>
  );
};
