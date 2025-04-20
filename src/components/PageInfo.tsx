const PageInfo = () => {
  return (
    <h1
      className="flex flex-col justify-center w-full font-bold text-[#05141F] h-[var(--h1-height)] leading-[var(--line-height-sm)]"
      style={{ fontSize: "var(--h1-fsize)" }}
    >
      자주 묻는 질문
      <em
        className="font-normal not-italic mt-[.4em] leading-[var(--line-height-md)]"
        style={{ fontSize: "var(--h1-fsize-sm)" }}
      >
        궁금하신 내용을 빠르게 찾아보세요.
      </em>
    </h1>
  );
};

export default PageInfo;
