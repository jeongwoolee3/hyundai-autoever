import AppInfo from "./AppInfo";
import FAQ from "./faq/FAQ";
import InquiryInfo from "./InquiryInfo";
import ProcessInfo from "./ProcessInfo";

const Main = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - var(--header-height) - var(--footer-height))",
        overflow: "hidden",
        padding: "0 var(--side-padding) var(--bottom-padding)",
      }}
    >
      <div className="flex flex-col max-w-[1240px] mx-auto justify-center">
        <div
          className="flex flex-col h-[var(--h1-height)] justify-center leading-[var(--line-height-sm)]"
          style={{ fontSize: "var(--h1-fsize)" }}
        >
          <p className="font-bold text-[#05141F]">자주 묻는 질문</p>
          <p
            className="font-normal text-[#05141F] mt-[8px]"
            style={{ fontSize: "var(--h1-fsize-sm)" }}
          >
            궁금하신 내용을 빠르게 찾아보세요.
          </p>
        </div>
        <FAQ />
        <InquiryInfo />
        <ProcessInfo />
        <AppInfo />
      </div>
    </div>
  );
};

export default Main;
