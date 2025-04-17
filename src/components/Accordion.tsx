import { useState } from "react";
import { FAQItem } from "../mocks/types";
import parse from "html-react-parser";

interface AccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion = ({ item, isOpen, onToggle }: AccordionProps) => {
  const { id, subCategoryName: category, question, answer } = item;

  return (
    <div className="w-full">
      <div
        key={id}
        className={`border-b border-[var(--gray-100)] transition-colors ${
          isOpen ? "bg-[var(--gray-10)]" : "bg-white"
        }`}
      >
        {/* 제목 영역 */}
        <button
          onClick={onToggle}
          type="button"
          className="
                w-full flex items-center relative 
                text-[var(--faq-list-a-size)] 
                leading-[var(--line-height-sm)]
                py-[var(--faq-list-a-padding-v)] 
                pr-[calc(var(--px-xlg)_+_1.6em)]
            "
        >
          <em className="text-[var(--gray-400)] not-italic px-[var(--faq-list-a-padding-h)] mr-[8px] w-[8em] f">
            {category}
          </em>
          <strong
            className="  flex-1 
                basis-0 
                pl-[var(--faq-list-a-padding-h)] 
                text-left"
          >
            {question}
          </strong>

          <svg
            className="w-6 h-6 text-[var(--gray-500)] transition-transform duration-300"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
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
        )}
      </div>
    </div>
  );
};

export default Accordion;
