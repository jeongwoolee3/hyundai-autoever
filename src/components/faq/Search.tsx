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
      <div
        className="flex justify-center"
        style={{
          backgroundColor: "var(--gray-10)",
          marginBottom: "var(--px-md)",
          padding: "var(--px-md)",
        }}
      >
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
          />

          {value && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-[48px] top-1/2 -translate-y-1/2 text-[#9BA1A5] cursor-pointer"
              aria-label="검색어 지우기"
            >
              ✕
            </button>
          )}

          <button
            type="submit"
            aria-label="검색하기"
            className="absolute right-[12px] top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] text-[#05141F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
