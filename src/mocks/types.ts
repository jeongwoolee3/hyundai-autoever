export type Tab = "CONSULT" | "USAGE";

export interface FAQItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

export interface CategoryItem {
  categoryID: string;
  name: string;
}

export function isValidTab(tab: string): tab is Tab {
  return ["CONSULT", "USAGE"].includes(tab);
}

export interface PageInfo {
  totalRecord: number;
  offset: number;
  limit: number;
  prevOffset: number;
  nextOffset: number;
}

export interface FaqResponse {
  items: FAQItem[];
  pageInfo: PageInfo;
}
