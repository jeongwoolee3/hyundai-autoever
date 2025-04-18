import { CategoryItem } from "../mocks/types";

interface CategoryFilterProps {
  categories: CategoryItem[];
  selected: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) => {
  return (
    <div
      className="flex flex-wrap"
      style={{ marginBottom: "var(--px-md)", marginRight: "-2px" }}
    >
      {categories.map((item) => {
        const isActive = selected === item.categoryID;
        return (
          <label
            key={item.categoryID}
            className="cursor-pointer flex items-center relative mr-[2px]"
            style={{
              overflow: "hidden",
            }}
          >
            <input
              type="radio"
              name="faq-filter"
              value={item.categoryID}
              checked={isActive}
              onChange={() => onChange(item.categoryID)}
              className="absolute left-[-100%]"
            />
            <span
              key={item.categoryID}
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
              {item.name}
            </span>
          </label>
        );
      })}
    </div>
  );
};
export default CategoryFilter;
