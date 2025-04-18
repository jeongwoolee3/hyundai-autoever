import { useState } from "react";
import Header from "./components/Header";
import CategoryContainer from "./components/CategoryContainter";
import Footer from "./components/Footer";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {/* <NavPanel isOpen={isNavOpen} /> */}
      <div
        style={{
          minHeight:
            "calc(100vh - var(--header-height) - var(--footer-height))",
          overflow: "hidden",
          padding: "0 var(--side-padding) var(--bottom-padding)",
        }}
      >
        <div className="flex flex-col max-w-[1240px] mx-auto justify-center">
          <h1
            className=" flex flex-col font-bold text-[#05141F] h-[var(--h1-height)] justify-center leading-[var(--line-height-sm)]"
            style={{ fontSize: "var(--h1-fsize)" }}
          >
            자주 묻는 질문
            <p
              className="font-normal text-[#05141F] mt-[8px]"
              style={{ fontSize: "var(--h1-fsize-sm)" }}
            >
              궁금하신 내용을 빠르게 찾아보세요.
            </p>
          </h1>
          <CategoryContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
