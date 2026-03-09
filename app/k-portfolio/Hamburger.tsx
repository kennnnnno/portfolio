"use client";

export const Hamburger = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-center bg-transparent mx-8 gap-2 w-12 h-12 "
    >
      <span
        className={`bg-gray-600 w-12 h-1 rounded-sm transition-transform duration-300 absolute ${isOpen ? "rotate-45" : "translate-y-[-10px]"}`}
      ></span>
      <span
        className={`bg-gray-600 w-12 h-1 rounded-sm transition-transform duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`bg-gray-600 w-12 h-1 rounded-sm transition-transform duration-300 absolute ${isOpen ? "-rotate-45" : "translate-y-[10px]"}`}
      ></span>
    </button>
  );
};
