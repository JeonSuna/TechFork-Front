import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { SelectBtnVariants } from "./select-button.styles";

interface ButtonProps extends VariantProps<typeof SelectBtnVariants> {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const SelectionBtn = ({
  onClick,
  children,
  size,
  status,
  className,
}: ButtonProps) => {
  return (
    <button
      className={cn(SelectBtnVariants({ status, size }), className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
