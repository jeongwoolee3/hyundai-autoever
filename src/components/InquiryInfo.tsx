import clsx from "clsx";

const InquiryInfo = () => {
  return (
    <div>
      <h2
        className="my-[var(--heading-2-margin)] leading-[var(--line-height-sm)] font-bold"
        style={{
          fontSize: "var(--heading-2)",
          margin: "var(--heading-2-margin)",
        }}
      >
        서비스 문의
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] sm:gap-[24px] -mx-[calc(var(--space-md)/2)]">
        <Inquiry
          icon="/icons/ic_download.svg"
          text="서비스 제안서 다운로드"
          href="https://wiblebiz.kia.com/static/media/proposal.e465bf89a6a3066e69af.pdf"
        />
        <Inquiry icon="/icons/ic_write.svg" text="상담문의 등록하기" href="#" />
        <Inquiry
          icon="/icons/ic_talk.svg"
          text="카카오톡으로 문의 하기"
          subText="ID : 기아 비즈"
          href="https://pf.kakao.com/_xfLxjdb"
          className="sm:col-span-2 md:col-auto"
        />
      </div>
    </div>
  );
};
export default InquiryInfo;

const Inquiry = ({
  icon,
  text,
  subText,
  href,
  className,
}: {
  icon: string;
  text: string;
  subText?: string;
  href: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        `flex-[1_1_0%] bg-white border border-[var(--midnight-900)] h-[var(--btn-xxlg)] min-h-[var(--btn-xxlg)] px-[1.4em] flex items-center justify-start sm:justify-center font-semibold text-[var(--midnight-900)] hover:bg-[var(--gray-50)]  transition`,
        className
      )}
      style={{ fontSize: "var(--btn-xxlg-size" }}
    >
      <img
        src={icon}
        alt={text}
        className="w-[var(--ic-lg)] h-[var(--ic-lg)] mr-2 shrink-0"
      />
      <span className="leading-[var(--line-height-sm)]">
        {text}
        {subText && (
          <em className="block text-[14px] font-normal text-[var(--gray-500)] not-italic">
            {subText}
          </em>
        )}
      </span>
    </a>
  );
};
