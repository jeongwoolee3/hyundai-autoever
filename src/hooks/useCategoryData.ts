import { useQuery } from "@tanstack/react-query";

const useCategoryData = (tab: string) => {
  return useQuery({
    queryKey: ["category", tab],
    queryFn: async () => {
      const res = await fetch(
        `/api/faq/category?tab=${encodeURIComponent(tab)}`
      );
      if (!res.ok) throw new Error("Failed to fetch FAQ");
      const data = await res.json();

      return [{ categoryID: "", name: "전체" }, ...data];
    },
    staleTime: 1000 * 60,
    placeholderData: undefined,
  });
};
export default useCategoryData;
