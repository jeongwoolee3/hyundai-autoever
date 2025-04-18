import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaqResponse } from "../mocks/types";

const NUM_FAQ_PER_PAGE = 10;

interface UseFAQDataParams {
  tab: "CONSULT" | "USAGE";
  faqCategoryID?: string;
  question?: string;
}

const useFAQData = ({ tab, faqCategoryID, question }: UseFAQDataParams) => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["faqList", tab, { faqCategoryID, question }],
    queryFn: async ({ pageParam: { offset } }) => {
      const params = new URLSearchParams({
        tab,
        limit: String(NUM_FAQ_PER_PAGE),
        offset: String(offset),
      });

      if (faqCategoryID) {
        params.append("faqCategoryID", faqCategoryID);
      }
      if (question) {
        params.append("question", question);
      }
      const res = await axios.get(`/api/faq?${params.toString()}`);
      return res.data as FaqResponse;
    },
    initialPageParam: { offset: 0 },
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo.nextOffset >= lastPage.pageInfo.totalRecord) {
        return null;
      }
      return { offset: lastPage.pageInfo.nextOffset };
    },
    select: (data) => data.pages.flatMap((page) => page.items),
  });

  return {
    faqList: data || null,
    hasMore: hasNextPage,
    fetchNextPage,
  };
};
export default useFAQData;
