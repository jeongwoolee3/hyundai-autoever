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
    text-[24px] 
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
      <a
        href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
        className="flex items-center justify-center bg-white text-[var(--midnight-900)] font-semibold text-[16px] h-[60px] w-[296px] mx-[8px] rounded-[8px] lg:text-[18px] lg:h-[64px] lg:w-[392px] lg:mx-[16px]"
      >
        <img src="/icons/logo_googleplay.svg" alt="구글플레이" />
        Google Play
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
        className="flex items-center justify-center bg-white text-[var(--midnight-900)] font-semibold text-[16px] h-[60px] w-[296px] mx-[8px] rounded-[8px] 2xl:text-[18px] 2xl:h-[64px] 2xl:w-[392px] 2xl:mx-[16px]"
      >
        <img src="/icons/logo_appstore.svg" alt="앱스토어" />
        App Store
      </a>
    </div>
  );
};
export default AppInfo;
