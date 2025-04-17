import clsx from "clsx";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isOpen, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col space-y-[4px] w-[20px] cursor-pointer md:hidden"
      aria-label="Toggle menu"
    >
      {/* Line 1 */}
      <span
        className={clsx(
          "block h-[2px] w-full bg-black transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-[7px] rotate-45" : ""
        )}
      />
      {/* Line 2 */}
      <span
        className={clsx(
          "block h-[2px] w-full bg-black transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-0" : "opacity-100"
        )}
      />
      {/* Line 3 */}
      <span
        className={clsx(
          "block h-[2px] w-full bg-black transition-transform duration-300 ease-in-out",
          isOpen ? "-translate-y-[7px] -rotate-45" : ""
        )}
      />
    </button>
  );
};

export default HamburgerButton;
