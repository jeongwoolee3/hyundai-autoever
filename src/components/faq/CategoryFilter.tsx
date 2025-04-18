import useCategoryData from "../../hooks/useCategoryData";
import { Tab } from "../../mocks/types";

interface CategoryFilterProps {
  selectedTab: Tab;
  selectedCategory: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({
  selectedTab,
  selectedCategory: selected,
  onChange,
}: CategoryFilterProps) => {
  const { data: categories } = useCategoryData(selectedTab);

  if (!categories) {
    return null;
  }

  return (
    <div
      className="flex flex-wrap"
      style={{ marginBottom: "var(--px-md)", marginRight: "-2px" }}
    >
      {categories.map((category) => {
        const isActive = selected === category.categoryID;
        return (
          <label
            key={category.categoryID}
            className="cursor-pointer flex items-center relative mr-[2px]"
            style={{
              overflow: "hidden",
            }}
          >
            <input
              type="radio"
              name="faq-filter"
              value={category.categoryID}
              checked={isActive}
              onChange={() => onChange(category.categoryID)}
              className="absolute left-[-100%]"
            />
            <span
              key={category.categoryID}
              className={`
                transition-all
                flex items-center justify-center font-semibold tracking-[-0.4px]
                h-[var(--btn-md)] min-w-[var(--btn-md)]
                px-[var(--space-sm)] rounded-[calc(var(--btn-md)_/_2)]
                ${
                  isActive
                    ? "bg-[var(--midnight-900)] text-white"
                    : "bg-white text-[#05141F] "
                }
              `}
            >
              {category.name}
            </span>
          </label>
        );
      })}
    </div>
  );
};
export default CategoryFilter;
