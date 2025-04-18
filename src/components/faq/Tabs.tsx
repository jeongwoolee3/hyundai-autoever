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
    <div className="flex w-full border border-[var(--midnight-100)] mb-[var(--px-lg)]">
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={clsx(
              "flex-1 text-center font-medium transition-all cursor-pointer",
              isSelected ? "text-white font-semibold" : "text-[#05141F]"
            )}
            style={{
              backgroundColor: isSelected ? "var(--midnight-900)" : "#fff",
              borderColor: isSelected
                ? "var(--midnight-900)"
                : "var(--midnight-100)",
              borderWidth: "1px",
              borderStyle: "solid",
              minHeight: "var(--btn-xlg2)",
            }}
          >
            {TAB_MAP[tab]}
          </button>
        );
      })}
    </div>
  );
};
export default Tabs;
