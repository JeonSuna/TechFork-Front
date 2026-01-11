import clsx from "clsx";

interface TabBtnProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const TabBtn = ({ label = "탭", selected, onClick }: TabBtnProps) => {
  return (
    <div
      className={clsx(
        "px-8 py-2  cursor-pointer ",
        selected && "text-blue-500 border-b-blue-500 border-b-2 body-sb-18",
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
