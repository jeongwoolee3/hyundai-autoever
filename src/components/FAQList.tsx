import { useState } from "react";
import { FAQItem, Tab } from "../mocks/types";
import Accordion from "./Accordion";

const FAQList = ({ faqList, tab }: { faqList: FAQItem[]; tab: Tab }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <ul className="border-t-[2px] border-t-[var(--midnight-900)]">
      {faqList.map((faq) => (
        <Accordion
          key={faq.id}
          tab={tab}
          item={faq}
          isOpen={openId === faq.id}
          onToggle={() => handleToggle(faq.id)}
        />
      ))}
    </ul>
  );
};

export default FAQList;
