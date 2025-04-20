import clsx from "clsx";
import { TAB_MAP } from "../../constants/tab";
import { Tab } from "../../mocks/types";

interface TabProps {
  tabs: Tab[];
  selectedTab: string;
  onChange: (tab: Tab) => void;
}

const Tabs = ({ tabs, selectedTab, onChange }: TabProps) => {
  return (
    <ul className="flex w-full border border-[var(--midnight-100)] mb-[var(--px-lg)]">
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab;
        return (
          <li
            key={tab}
            onClick={() => onChange(tab)}
            className={clsx(
              "flex-1 text-center font-medium transition-all cursor-pointer relative",
              isSelected
                ? "text-white font-semibold"
                : "text-[var(--midnight-900)]"
            )}
            style={{
              backgroundColor: isSelected ? "var(--midnight-900)" : "#fff",
              borderColor: isSelected
                ? "var(--midnight-900)"
                : "var(--midnight-100)",
              minHeight: "var(--btn-xlg2)",
              fontSize: "var(--tab-fsize)",
            }}
          >
            <span className="flex items-center justify-center h-full p-[8px] text-center leading-[1.1] text-inherit">
              {TAB_MAP[tab]}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default Tabs;
