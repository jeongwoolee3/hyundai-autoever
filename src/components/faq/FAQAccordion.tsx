import { useEffect, useRef, useState } from "react";
import { FAQItem, Tab } from "../../mocks/types";
import parse from "html-react-parser";

interface FAQAccordionProps {
  item: FAQItem;
  tab: Tab;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordion = ({ item, tab, isOpen, onToggle }: FAQAccordionProps) => {
  const { id, categoryName, subCategoryName, question, answer } = item;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <div
        key={id}
        className={`border-b border-[var(--gray-100)] transition-colors ${
          isOpen ? "bg-[var(--gray-10)]" : "bg-white"
        }`}
      >
        <button
          onClick={onToggle}
          type="button"
          className="cursor-pointer w-full flex flex-col md:flex-row items-start md:items-center md:justify-between gap-[4px] relative leading-[var(--line-height-sm)] py-[var(--faq-list-a-padding-v)] pr-[calc(var(--px-xlg)_+_1.6em)]"
          style={{ fontSize: "var(--faq-list-a-size)" }}
        >
          <div className="flex">
            {tab === "USAGE" && (
              <div className="flex">
                <em className="text-[var(--gray-400)] text-[calc(1em-4px)] md:text not-italic md:px-[var(--faq-list-a-padding-h)] md:w-[184px] md:inline-block md:text-[18px]">
                  {categoryName}
                </em>
                <img
                  src="/icons/ic_step_arrow.svg"
                  width={12}
                  className="md:hidden"
                />
              </div>
            )}
            <em className="text-[var(--gray-400)] text-[calc(1em-4px)] not-italic md:px-[var(--faq-list-a-padding-h)] md:w-[184px] md:inline-block md:text-[18px]">
              {subCategoryName}
            </em>
          </div>
          <strong
            className="flex-1 
                basis-0 
                md:pl-[var(--faq-list-a-padding-h)] 
                text-left"
          >
            {question}
          </strong>
          <img
            src="/icons/ic_arrow.svg"
            className="h-[var(--ic-md)] absolute right-[calc((var(--px-xlg)-var(--ic-md))/2)] top-1/2 -translate-y-1/2 text-[var(--gray-500)] transition-transform duration-300 "
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>

        {isOpen && (
          <div
            ref={contentRef}
            style={{
              height,
              transition: "height 0.6s var(--cubic-bezier-primary)",
              overflow: "hidden",
            }}
          >
            <div
              className="
                bg-white
                border-t border-[var(--gray-100)]
                text-[1rem]
                leading-[var(--line-height-lg)]
                overflow-x-scroll
              "
              style={{ padding: "var(--faq-list-q-padding)" }}
            >
              {parse(answer)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;
