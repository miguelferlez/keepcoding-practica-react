import type { ComponentProps } from "react";

interface ChoiceFieldProps extends ComponentProps<"input"> {
  label: string;
  forId: string;
}

const ChoiceField = ({ label, forId, ...props }: ChoiceFieldProps) => {
  return (
    <li className="has-checked:bg-primary w-full border-b border-gray-200 first:rounded-t-lg last:rounded-b-lg last:border-r-0 last:border-b-0 has-checked:text-white sm:border-r sm:border-b-0 sm:first:rounded-t-none sm:first:rounded-l-lg sm:last:rounded-l-none sm:last:rounded-r-lg">
      <div className="flex items-center ps-3">
        <input
          className="accent-primary h-4 w-4 rounded-sm border-gray-300"
          id={forId}
          {...props}
        />
        <label htmlFor={forId} className="ms-2 w-full py-3 text-sm">
          {label}
        </label>
      </div>
    </li>
  );
};

export default ChoiceField;
