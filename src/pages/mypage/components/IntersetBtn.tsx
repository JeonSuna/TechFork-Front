import Close from "@/assets/icons/close-blue.svg";
import { useEditTagStore } from "../../../store/useEditTagStore";

interface InterstBtnProps {
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const InterstBtn = ({ label, onClick }: InterstBtnProps) => {
  const { toggleTag } = useEditTagStore();
  return (
    <button
      className="body-r-14 flex rounded-[20px] px-4 py-2 bg-blue-50 text-blue-500 items-center"
      onClick={onClick}
    >
      {label}
      <img
        src={Close}
        alt="close"
        className="size-5 cursor-pointer"
        onClick={e => {
          e.stopPropagation();
          toggleTag(label); //버블링 막기
        }}
      />
    </button>
  );
};
