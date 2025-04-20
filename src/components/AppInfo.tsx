const AppInfo = () => {
  return (
    <div
      className="
    bg-[var(--gray-10)]
    rounded-[16px]
    flex flex-wrap justify-center
    mt-[48px] p-[32px]
    xl1440:mt-[64px] xl1440:p-[40px]
  "
    >
      <h2
        className="
    text-[16px] sm:text-[20px] md:text-[24px]
    leading-[var(--line-height-sm)] 
    mb-[24px] 
    text-center
    font-bold 
    w-full 
    lg:text-[32px] 
    lg:mb-[32px]
  "
      >
        <em className="not-italic">기아 비즈 App</em> 지금 만나보세요!
      </h2>
      <div className="flex flex-col gap-[12px] sm:flex-row sm:gap-[16px]">
        <a
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
          className="flex items-center justify-center bg-white text-[var(--midnight-900)] font-semibold h-[60px] w-[296px] rounded-[8px] text-[14px] md:text-[16px] lg:text-[18px] lg:h-[64px] lg:w-[392px]"
        >
          <img src="/icons/logo_googleplay.svg" alt="구글플레이" />
          Google Play
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
          className="flex items-center justify-center bg-white text-[var(--midnight-900)] font-semibold h-[60px] w-[296px] rounded-[8px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:h-[64px] 2xl:w-[392px]"
        >
          <img src="/icons/logo_appstore.svg" alt="앱스토어" />
          App Store
        </a>
      </div>
    </div>
  );
};
export default AppInfo;
