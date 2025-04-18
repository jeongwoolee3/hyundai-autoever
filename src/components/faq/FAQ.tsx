import { useEffect, useState } from "react";
import useFAQData from "../../hooks/useFAQData";
import { FAQItem, Tab } from "../../mocks/types";
import Search from "./Search";
import Tabs from "./Tabs";
import CategoryFilter from "./CategoryFilter";
import FAQList from "./FAQList";

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("CONSULT");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [offset, setOffset] = useState(0);
  const [question, setQuestion] = useState("");
  const [keyword, setKeyword] = useState("");
  const [faqList, setFaqList] = useState<FAQItem[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const limit = 10;

  const { data } = useFAQData({
    tab: selectedTab,
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
  }, [selectedTab, selectedCategory]);

  useEffect(() => {
    setSelectedCategory("");
    setQuestion("");
    setKeyword("");
  }, [selectedTab]);

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
        selectedTab={selectedTab}
        selectedCategory={selectedCategory}
        onChange={(value) => {
          setSelectedCategory(value);
          setOffset(0);
        }}
      />
      <FAQList faqList={faqList ?? []} tab={selectedTab} />
      {hasMore && (
        <button
          onClick={() => setOffset((prev) => prev + limit)}
          className="cursor-pointer flex justify-center items-center w-full h-[var(--btn-xlg2)] mt-[var(--faq-list-a-size)] font-medium"
          style={{ fontSize: "var(--list-more-size)" }}
        >
          + 더보기
        </button>
      )}
    </div>
  );
};
export default FAQ;
