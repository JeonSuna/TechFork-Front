import { SelectionBtn } from "./select-button/SelectionBtn";

interface MultiSelectedTagProps {
  tag: string;
  selected: boolean;
  onClick: () => void;
}

export const MultiSelectedTag = ({
  tag,
  selected,
  onClick,
}: MultiSelectedTagProps) => {
  return (
    <SelectionBtn
      className="w-fit cursor-pointer"
      status={selected ? "select" : "default"}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    >
      {tag}
    </SelectionBtn>
  );
};
