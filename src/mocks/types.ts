export interface CategoryItem {
  categoryID: string;
  name: string;
}

export function isValidTab(tab: string): tab is Tab {
  return ["CONSULT", "USAGE"].includes(tab);
}
