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
        <div></div>
        <button
          onClick={onToggle}
          type="button"
          className="
                cursor-pointer
                w-full flex items-center relative 
                leading-[var(--line-height-sm)]
                py-[var(--faq-list-a-padding-v)] 
                pr-[calc(var(--px-xlg)_+_1.6em)]
            "
          style={{ fontSize: "var(--faq-list-a-size)" }}
        >
          {tab === "USAGE" && (
            <em className="text-[var(--gray-400)] not-italic px-[var(--faq-list-a-padding-h)] w-[10em] ">
              {categoryName}
            </em>
          )}
          <em className="text-[var(--gray-400)] not-italic px-[var(--faq-list-a-padding-h)] w-[8em] ">
            {subCategoryName}
          </em>
          <strong
            className="  flex-1 
                basis-0 
                pl-[var(--faq-list-a-padding-h)] 
                text-left"
          >
            {question}
          </strong>
          <img
            src="/icons/ic_arrow.svg"
            className="h-[var(--ic-md)] absolute right-[calc((var(--px-xlg)-var(--ic-md))/2)] text-[var(--gray-500)] transition-transform duration-300 "
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
