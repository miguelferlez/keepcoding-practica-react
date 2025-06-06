import { useState } from "react";
import CloseIcon from "../icons/close-icon";
import OpenIcon from "../icons/open-icon";

export interface HamburgerProps {
  defaultIsOpen: boolean;
  onClick: () => void;
}

export function Hamburger({ defaultIsOpen, onClick }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  function handleClick() {
    setIsOpen((prev) => !prev);
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="hover:bg-primary relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white sm:-m-2 sm:block md:hidden"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="absolute -inset-0.25"></span>
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <CloseIcon className="size-6" />
      ) : (
        <OpenIcon className="size-6" />
      )}
    </button>
  );
}
