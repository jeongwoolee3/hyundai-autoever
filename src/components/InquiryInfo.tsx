const InquiryInfo = () => {
  return (
    <div className="flex -mx-[calc(var(--space-md)/2)]">
      <a
        href="https://wiblebiz.kia.com/static/media/proposal.e465bf89a6a3066e69af.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex-[1_1_0%] 
          mx-[calc(var(--space-md)/2)] 
          bg-white 
          border border-[var(--midnight-900)] 
          h-[var(--btn-xxlg)] 
          min-h-[var(--btn-xxlg)] 
          px-[1.4em] 
          flex items-center justify-center
          font-semibold text-[var(--midnight-900)]
          hover:bg-[var(--gray-50)] transition
        "
        style={{ fontSize: "var(--btn-xxlg-size" }}
      >
        <img
          src="/icons/ic_download.svg"
          alt="다운로드"
          className="w-[var(--ic-lg)] h-[var(--ic-lg)] mr-2 shrink-0"
        />
        <span>서비스 제안서 다운로드</span>
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex-[1_1_0%] 
          mx-[calc(var(--space-md)/2)] 
          bg-white 
          border border-[var(--midnight-900)] 
          h-[var(--btn-xxlg)] 
          min-h-[var(--btn-xxlg)] 
          px-[1.4em] 
          flex items-center justify-center
          font-semibold text-[var(--midnight-900)]
          hover:bg-[var(--gray-50)] transition
        "
        style={{ fontSize: "var(--btn-xxlg-size" }}
      >
        <img
          src="/icons/ic_write.svg"
          alt="등록"
          className="w-[var(--ic-lg)] h-[var(--ic-lg)] mr-2 shrink-0"
        />
        <span>상담문의 등록하기</span>
      </a>
      <a
        href="https://pf.kakao.com/_xfLxjdb"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex-[1_1_0%] 
          mx-[calc(var(--space-md)/2)] 
          bg-white 
          border border-[var(--midnight-900)] 
          h-[var(--btn-xxlg)] 
          min-h-[var(--btn-xxlg)] 
          px-[1.4em] 
          flex items-center justify-center
          font-semibold text-[var(--midnight-900)]
          hover:bg-[var(--gray-50)] transition
        "
        style={{ fontSize: "var(--btn-xxlg-size" }}
      >
        <img
          src="/icons/ic_talk.svg"
          alt="문의"
          className="w-[var(--ic-lg)] h-[var(--ic-lg)] mr-2 shrink-0"
        />
        <span className="leading-[var(--line-height-sm)]">
          카카오톡으로 문의 하기
          <em className="block text-[14px] font-normal text-[var(--gray-500)] not-italic">
            ID : 기아 비즈
          </em>
        </span>
      </a>
    </div>
  );
};
export default InquiryInfo;
