import { useEffect, useState } from "react";

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(true);

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.scrollY === 0) {
      setShowButton(false);
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <button
      className="sticky bottom-[32px] right-[20px] bg-white rounded-full w-[42px] aspect-square shadow-[0_4px_32px_rgba(0,0,0,0.28)] cursor-pointer flex justify-center items-center self-end"
      onClick={scrollUp}
    >
      <img src="/icons/ic_top.svg" className="w-[20px]" />
    </button>
  );
};

export default FloatingButton;
