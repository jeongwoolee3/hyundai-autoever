import { useEffect, useState } from "react";
import clsx from "clsx";
import { throttle } from "lodash";
import NavPanel from "./NavPanel";
interface HeaderProps {
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
}

const CloseIcon = () => (
  <svg
    className="w-6 h-6 text-black"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Header = ({ isNavOpen, setIsNavOpen }: HeaderProps) => {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsPinned(window.scrollY > 0);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 z-10 w-full h-[56px] md:h-[80px] px-[24px] sm:px-[48px] flex justify-between items-center bg-white transition-shadow duration-300",
        {
          "shadow-[0_4px_32px_rgba(0,0,0,0.08)]": isPinned,
        }
      )}
    >
      <img
        className="w-[110px] md:w-[140px] cursor-pointer"
        src="/icons/logo.svg"
        alt="Kia Biz"
      />
      {isNavOpen ? (
        <button
          className="w-[20px] cursor-pointer md:hidden"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <CloseIcon />
        </button>
      ) : (
        <button
          className="flex flex-col space-y-[4px] w-[20px] cursor-pointer md:hidden"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <div className="bg-black h-[2px]" />
          <div className="bg-black h-[2px]" />
          <div className="bg-black h-[2px]" />
        </button>
      )}

      <div className="hidden md:block space-x-[40px]">
        {["서비스 소개", "자주 묻는 질문", "새소식", "상담문의"].map((menu) => (
          <button key={menu} className="cursor-pointer text-[18px] font-bold">
            {menu}
          </button>
        ))}
      </div>
      {isNavOpen && <NavPanel isOpen={isNavOpen} />}
    </header>
  );
};
export default Header;
