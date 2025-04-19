import { useEffect, useState } from "react";
import useFAQData from "../../hooks/useFAQData";
import { Tab } from "../../mocks/types";
import Search from "./Search";
import Tabs from "./Tabs";
import CategoryFilter from "./CategoryFilter";
import FAQList from "./FAQList";
import Dialog from "../Dialog";

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("CONSULT");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { faqList, hasMore, fetchNextPage } = useFAQData({
    tab: selectedTab,
    faqCategoryID: selectedCategory,
    question,
  });

  useEffect(() => {
    setSelectedCategory("");
    setQuestion("");
    setKeyword("");
  }, [selectedTab]);

  const handleSearch = (question: string) => {
    if (question.length === 1) {
      setIsDialogOpen(true);
      return;
    }
    setQuestion(question);
  };

  const handleSearchReset = () => {
    setQuestion("");
    setKeyword("");
  };

  return (
    <div>
      <Tabs
        tabs={["CONSULT", "USAGE"]}
        selectedTab={selectedTab}
        onChange={setSelectedTab}
      />
      <Search
        value={keyword}
        onChange={setKeyword}
        onSearch={handleSearch}
        onClear={() => setKeyword("")}
      />
      {question && (
        <div className="flex justify-between my-[var(--px-md)]">
          <h2 style={{ fontSize: "var(--heading-info)", fontWeight: 700 }}>
            검색 결과 총 {faqList?.length ?? 0}건
          </h2>
          <button
            className="cursor-pointer flex items-center space-x-1"
            onClick={handleSearchReset}
          >
            <img src="/icons/ic_reset.svg" width={24} />
            <span className="text-[16px]">검색 초기화</span>
          </button>
        </div>
      )}
      <CategoryFilter
        selectedTab={selectedTab}
        selectedCategory={selectedCategory}
        onChange={(value) => {
          setSelectedCategory(value);
        }}
      />
      <FAQList
        faqList={faqList ?? []}
        tab={selectedTab}
        selectedCategory={selectedCategory}
      />
      {hasMore && (
        <button
          onClick={() => fetchNextPage()}
          className="cursor-pointer flex justify-center items-center w-full h-[var(--btn-xlg2)] mt-[var(--faq-list-a-size)] font-medium"
          style={{ fontSize: "var(--list-more-size)" }}
        >
          + 더보기
        </button>
      )}
      {isDialogOpen && (
        <Dialog
          onClose={() => setIsDialogOpen(false)}
          message="검색어는 2글자 이상 입력해주세요."
        />
      )}
    </div>
  );
};
export default FAQ;
