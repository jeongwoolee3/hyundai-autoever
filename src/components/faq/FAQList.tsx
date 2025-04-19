import { useState } from "react";
import { FAQItem, Tab } from "../../mocks/types";
import FAQAccordion from "./FAQAccordion";

const FAQList = ({ faqList, tab }: { faqList: FAQItem[]; tab: Tab }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <ul className="border-t-[2px] border-t-[var(--midnight-900)]">
      {faqList.length > 0 ? (
        faqList.map((faq) => (
          <FAQAccordion
            key={faq.id}
            tab={tab}
            item={faq}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center border-b-1 border-[var(--gray-200)] py-[var(--space-box2)]">
          <img
            src="/icons/ic_nodata.svg"
            className="h-[var(--ic-xlg2)] w-[var(--ic-xlg2)] block mx-auto "
          />
          <span className="text-[var(--gray-500)] leading-[var(--line-height-md)] mt-[var(--space-xsm)]">
            검색결과가 없습니다.
          </span>
        </div>
      )}
    </ul>
  );
};

export default FAQList;
