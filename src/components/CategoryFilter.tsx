import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const CategoryFilter = ({
  categories,
  defaultValue = categories[0],
  onChange,
}: CategoryFilterProps) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  console.log(categories);
  return (
    <div
      className="flex flex-wrap"
      style={{ marginBottom: "var(--px-md)", marginRight: "-2px" }}
    >
      {categories.map((item, i) => {
        const isActive = selected === item;
        return (
          <label
            key={item + i}
            className="cursor-pointer flex items-center relative mr-[2px]"
            style={{
              WebkitTapHighlightColor: "transparent",
              overflow: "hidden",
            }}
          >
            <input
              type="radio"
              name="faq-filter"
              value={item}
              checked={isActive}
              onChange={() => handleChange(item)}
              className="absolute left-[-100%]"
            />
            <span
              key={item}
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
              {item}
            </span>
          </label>
        );
      })}
    </div>
  );
};
export default CategoryFilter;
