import { cn } from "../lib/cn";

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
    <li
      className={cn(
        "px-3 py-0.5 border border-blue-400 rounded-2xl w-fit ",
        selected && "bg-blue-100",
      )}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    >
      <p className="body-r-14 ">{tag}</p>
    </li>
  );
};
