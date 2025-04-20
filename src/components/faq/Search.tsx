import React from "react";

interface SearchProps {
  value: string;
  onChange: (val: string) => void;
  onSearch: (val: string) => void;
  onClear: () => void;
}

const Search = ({ value, onChange, onSearch, onClear }: SearchProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value.trim()); // 검색어 부모로 전달
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center lg:bg-[var(--gray-10)] bg-white sm:bg-[var(--gray-10)] px-0 sm:p-[var(--px-md)] mb-[var(--px-md)]">
        <div
          className="bg-white border border-[var(--gray-200)] relative"
          style={{
            width: "var(--search-bar-width)",
          }}
        >
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="찾으시는 내용을 입력해 주세요"
            className="flex-1 bg-transparent outline-none text-[#05141F] placeholder-[#9BA1A5] w-full border"
            style={{
              fontSize: "1rem",
              height: "var(--btn-xlg2)",
              borderColor: "var(--midnight-900)",
              paddingLeft: "16px",
              paddingRight:
                "calc(var(--ic-sm) + var(--clear-space) + var(--btn-xlg2) - 2px)",
            }}
          ></input>

          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center space-x-2">
            {value && (
              <button
                type="button"
                onClick={onClear}
                className="text-[#9BA1A5] cursor-pointer"
                aria-label="검색어 지우기"
              >
                <img src="/icons/ic_clear.svg" />
              </button>
            )}

            <button
              type="submit"
              aria-label="검색하기"
              className="cursor-pointer"
            >
              <img src="/icons/ic_search.svg" width={32} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
