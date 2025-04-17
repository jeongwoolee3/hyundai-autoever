interface TabProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = ["서비스 도입", "서비스 이용"];

const Tab = ({ activeTab, onChange }: TabProps) => {
  return (
    <div className="flex w-full border border-[var(--midnight-100)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`flex-1 text-center font-medium transition-all ${
              isActive ? "text-white font-semibold" : "text-[#05141F]"
            }`}
            style={{
              backgroundColor: isActive ? "var(--midnight-900)" : "#fff",
              borderColor: isActive
                ? "var(--midnight-900)"
                : "var(--midnight-100)",
              borderWidth: "1px",
              borderStyle: "solid",
              minHeight: "var(--btn-xlg2)",
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
export default Tab;
