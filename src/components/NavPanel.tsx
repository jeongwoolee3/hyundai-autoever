interface NavbarProps {
  isOpen: boolean;
}

const NavPanel = ({ isOpen }: NavbarProps) => {
  return (
    <div
      className={`fixed top-[var(--header-height)] bottom-0 left-0 w-full flex flex-col bg-white px-[var(--side-padding)] transition-[margin-left] duration-[800ms] ease-[var(--cubic-bezier-primary)] ${
        isOpen ? "ml-0" : "-ml-full"
      }`}
    >
      <nav className="flex flex-col items-center mt-[80px]">
        {["서비스 소개", "자주 묻는 질문", "새소식", "상담문의"].map((menu) => (
          <a href="#" className="p-4 cursor-pointer text-[24px]  font-bold">
            {menu}
          </a>
        ))}
      </nav>
    </div>
  );
};
export default NavPanel;
