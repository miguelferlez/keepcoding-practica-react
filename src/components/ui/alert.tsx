import type { ComponentProps, ReactNode } from "react";
import CloseIcon from "../icons/close-icon";

interface AlertProps extends ComponentProps<"div"> {
  type: "success" | "warning" | "error" | "info";
  children: ReactNode;
}

const Alert = ({ type, children, ...props }: AlertProps) => {
  return (
    <div className={`alert alert-${type}`} role="alert" {...props}>
      <span>{children}</span>
      <CloseIcon className="size-6" />
    </div>
  );
};

export default Alert;
