type Tab = "CONSULT" | "USAGE";

export function isValidTab(tab: string): tab is Tab {
  return ["CONSULT", "USAGE"].includes(tab);
}
