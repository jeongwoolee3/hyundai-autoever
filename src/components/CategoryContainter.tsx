import { useEffect, useState } from "react";
import useCategoryData from "../hooks/useCategoryData"; // tab 기반 fetch 훅
import useFAQData from "../hooks/useFaqData";
import { FAQItem, Tab as TabType } from "../mocks/types";
import FAQList from "./\bFAQList";
import AppInfo from "./AppInfo";
import CategoryFilter from "./CategoryFilter";
import InquiryInfo from "./InquiryInfo";
import ProcessInfo from "./ProcessInfo";
import Search from "./Search";
import Tab from "./Tab";

const tabs = ["서비스 도입", "서비스 이용"];
const TAB_MAP: Record<string, TabType> = {
  "서비스 도입": "CONSULT",
  "서비스 이용": "USAGE",
};

const CategoryContainer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [offset, setOffset] = useState(0);
  const [question, setQuestion] = useState("");
  const [keyword, setKeyword] = useState("");
  const [faqList, setFaqList] = useState<FAQItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  const { data: categories = [], isLoading } = useCategoryData(
    TAB_MAP[activeTab]
  );

  const {
    data,
    isLoading: isFAQLoading,
    error,
  } = useFAQData({
    tab: TAB_MAP[activeTab],
    limit,
    offset,
    faqCategoryID: selectedCategory,
    question,
  });

  useEffect(() => {
    if (!data) return;

    if (offset === 0) {
      setFaqList(data.items);
    } else {
      setFaqList((prev) => [...prev, ...data.items]);
    }

    setHasMore(data.items.length === limit);
  }, [data, offset]);

  useEffect(() => {
    setOffset(0);
  }, [activeTab, selectedCategory]);

  useEffect(() => {
    setSelectedCategory("");
    setQuestion("");
    setKeyword("");
  }, [activeTab]);

  return (
    <>
      <Tab activeTab={activeTab} onChange={setActiveTab} />
      <Search
        value={keyword}
        onChange={setKeyword}
        onSearch={(question) => {
          setQuestion(question);
          setOffset(0); // 새로운 검색이니까 첫 페이지로 초기화
        }}
      />
      {question && (
        <div className="flex justify-between my-[var(--px-md)]">
          <h2 style={{ fontSize: "var(--heading-info)", fontWeight: 700 }}>
            검색 결과 총 {faqList?.length ?? 0}건
          </h2>
          <button>검색 초기화</button>
        </div>
      )}
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onChange={(value) => {
          setSelectedCategory(value);
          setOffset(0);
        }}
      />
      <FAQList faqList={faqList ?? []} tab={TAB_MAP[activeTab]} />
      {hasMore && (
        <button
          onClick={() => setOffset((prev) => prev + limit)}
          className="cursor-pointer flex justify-center items-center w-full h-[var(--btn-xlg2)] mt-[var(--faq-list-a-size)] font-medium"
          style={{ fontSize: "var(--list-more-size)" }}
        >
          + 더보기
        </button>
      )}
      <h2
        className="my-[var(--heading-2-margin)] leading-[var(--line-height-sm)] font-bold"
        style={{
          fontSize: "var(--heading-2)",
          margin: "var(--heading-2-margin)",
        }}
      >
        서비스 문의
      </h2>
      <InquiryInfo />
      <h2
        className="my-[var(--heading-2-margin)] leading-[var(--line-height-sm)] font-bold"
        style={{
          fontSize: "var(--heading-2)",
          margin: "var(--heading-2-margin)",
        }}
      >
        이용 프로세스 안내
      </h2>
      <ProcessInfo />
      <AppInfo />
    </>
  );
};
export default CategoryContainer;
