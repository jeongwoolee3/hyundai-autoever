const PageInfo = () => {
  return (
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
  );
};

export default PageInfo;
