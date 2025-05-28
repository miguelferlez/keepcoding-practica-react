import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

interface FormFieldProps extends ComponentProps<"input"> {
  icon?: ReactNode;
  label: string;
}

const FormField = ({ icon, label, ...props }: FormFieldProps) => {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <label className="font-bold">
        {label}
        {props.required && <span className="text-red-500"> *</span>}
      </label>
      <div className="relative text-gray-500 focus-within:text-gray-900">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={clsx(
            { "pl-12": icon, "pl-4": !icon },
            "block h-11 w-full rounded-full border border-gray-300 bg-transparent pr-4 font-normal text-gray-900 placeholder-gray-400",
          )}
        />
      </div>
    </div>
  );
};

export default FormField;
