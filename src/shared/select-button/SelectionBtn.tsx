import type { VariantProps } from "class-variance-authority";
import { SelectBtnVariants } from "./select-button.styles";

interface ButtonProps extends VariantProps<typeof SelectBtnVariants> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export const SelectionBtn = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      // className={cn(SelectBtnVariants({ status, size }), className)}
      className={"text-blue-500 bg-blue-50 body-r-14 py-1 px-6 rounded-[20px]"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
