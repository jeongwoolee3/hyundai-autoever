import { useQuery } from "@tanstack/react-query";
import { FaqResponse } from "../mocks/types";

interface UseFAQDataParams {
  tab: "CONSULT" | "USAGE";
  limit?: number;
  offset?: number;
  faqCategoryID?: string;
  question?: string;
}

const useFAQData = ({
  tab,
  limit = 10,
  offset = 0,
  faqCategoryID,
  question,
}: UseFAQDataParams) => {
  return useQuery<FaqResponse>({
    queryKey: ["faqList", tab, offset, faqCategoryID ?? null, question ?? null],
    queryFn: async () => {
      const params = new URLSearchParams({
        tab,
        limit: String(limit),
        offset: String(offset),
      });

      if (faqCategoryID) {
        params.append("faqCategoryID", faqCategoryID);
      }
      if (question) {
        params.append("question", question);
      }
      const res = await fetch(`/api/faq?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch FAQ list");

      return res.json();
    },
    staleTime: 1000 * 60,
    placeholderData: undefined,
  });
};
export default useFAQData;
