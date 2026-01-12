import { cva } from "class-variance-authority";

export const SelectBtnVariants = cva(
  `inline-flex items-center justify-center py-2 px-4  w-fit rounded-[20px]`,
  {
    variants: {
      size: {
        default: "w-22 body-r-14 py-1 px-4",
        sm: "w-17 text-xs py-1 px-6",
      },
      status: {
        default: "text-black border border-bgNormal bg-white",
        select: " border border-translate bg-blue-500 text-white",
      },
    },
    defaultVariants: {
      size: "default",
      status: "default",
    },
  },
);
