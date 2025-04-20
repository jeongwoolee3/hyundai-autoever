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
        "sticky top-0 z-10  px-[var(--side-padding)]  bg-white transition-shadow duration-300",
        {
          "shadow-[0_4px_32px_rgba(0,0,0,0.08)]": isPinned,
        }
      )}
    >
      <div className=" mx-auto max-w-[var(--max-width)] h-[var(--header-height)] items-center flex-wrap flex">
        <img
          className="w-[110px]  md:w-[140px] md:h-[100%] cursor-pointer"
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
        <nav className="md:flex-[1_1_0%] md:-mr-[20px]">
          <ul className="md:flex md:justify-end">
            {["서비스 소개", "자주 묻는 질문", "새소식", "상담문의"].map(
              (menu) => (
                <li key={menu} className="cursor-pointer md:mx-[16px]">
                  <a className="md:block md:text-[18px] md:font-semibold md:leading-[var(--header-height)] md:px-[4px] md:relative">
                    {menu}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {isNavOpen && <NavPanel isOpen={isNavOpen} />}
    </header>
  );
};
export default Header;
