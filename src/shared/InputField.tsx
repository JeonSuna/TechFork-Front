import { cn } from "../lib/cn";

interface InputFieldProps {
  label: string;
  placeholder: string;
  className?: string;
  isDot?: boolean;
  area?: boolean;
}

export const InputField = ({
  label,
  placeholder,
  className,
  isDot,
  area,
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <div className="flex">
        <p className={cn("mb-3 body-sb-16", className)}>{label}</p>
        {isDot && <p className="text-alert">*</p>}
      </div>
      <div className="w-full  rounded-xl mb-5">
        {!area ? (
          <input
            type="text"
            className="w-full p-3 body-r-14  rounded-xl border  border-[#E5E8EB] bg-[#F7F8F9] focus:outline-none focus:border-blue-300 "
            placeholder={placeholder}
          />
        ) : (
          <textarea
            className="w-full    p-3 body-r-14  rounded-xl border  border-[#E5E8EB] bg-[#F7F8F9] focus:outline-none focus:border-blue-300
        h-30 resize-none
        "
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};
