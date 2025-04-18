import React from "react";

const Footer = () => {
  return (
    <footer
      className="
      relative 
      bg-[var(--midnight-900)] 
      text-[var(--gray-400)] 
      px-[var(--side-padding)]
    "
    >
      <div
        className="
       flex flex-col justify-between
      pt-[18px] pb-[29px]
      sm:pt-[34px] sm:pb-[44px]
      md:flex-row-reverse md:items-center
      max-w-[var(--max-width)] mx-auto
      "
      >
        <div>
          <span className="flex lg:justify-end lg:mb-[10px]">
            <button
              className="cursor-pointer text-white  lg:ml-[24px] lg:leading-[var(--line-height)] hover:underline"
              style={{ fontSize: "var(--font-md)" }}
            >
              <b>개인정보 처리방침</b>
            </button>
            <button
              className="cursor-pointer text-white  lg:ml-[24px] lg:leading-[var(--line-height)] "
              style={{ fontSize: "var(--font-lg)" }}
            >
              이용약관
            </button>
          </span>
          <address
            className="lg:text-right text-[14px] not-italic"
            style={{ fontStyle: "normal" }}
          >
            <span className="inline-flex lg:ml-[12px]">
              서울특별시 서초구 헌릉로 12<em className="not-italic">기아㈜</em>
            </span>
            <span className="inline-flex lg:ml-[12px]">
              대표: <i className="not-italic">송호성, 최준영</i>
            </span>
            <br />
            <span className="inline-flex lg:ml-[12px]">
              사업자등록번호: <i className="not-italic">119-81-02316</i>
            </span>
            <br />
            <span className="inline-flex lg:ml-[12px]">
              통신판매번호: <i className="not-italic">2006-07935</i>
            </span>
            <br />
            <span className="inline-flex lg:ml-[12px]">
              고객센터: <i className="not-italic">1833-4964</i>
            </span>
            <br />
            <span className="inline-flex lg:ml-[12px]">
              제휴문의: <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
            </span>
          </address>
        </div>
        <p className="text-[14px]">
          <img
            src={"/logo_kia.svg"}
            style={{ marginBottom: "2px", height: "56px" }}
          />
          © 2023 KIA CORP. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
