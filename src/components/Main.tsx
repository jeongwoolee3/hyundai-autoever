import AppInfo from "./AppInfo";
import FAQ from "./faq/FAQ";
import FloatingButton from "./FloatingButton";
import InquiryInfo from "./InquiryInfo";
import PageInfo from "./PageInfo";
import ProcessInfo from "./ProcessInfo";

const Main = () => {
  return (
    <div
      className="relative flex flex-col items-center"
      style={{
        minHeight: "calc(100vh - var(--header-height) - var(--footer-height))",
        padding: "0 var(--side-padding) var(--bottom-padding)",
      }}
    >
      <div className="flex flex-col max-w-[1240px] justify-center">
        <PageInfo />
        <FAQ />
        <InquiryInfo />
        <ProcessInfo />
        <AppInfo />
      </div>
      <FloatingButton />
    </div>
  );
};

export default Main;
