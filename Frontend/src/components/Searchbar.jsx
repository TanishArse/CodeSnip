
function SearchBar({ onSearchChange, onTagChange, tags = [] }) {
  return (
    <div className="flex w-full max-w-xl items-center gap-2.5">

      {/* Search input */}
      <div className="relative min-w-0 flex-1">
        <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#858B87] text-xs"></i>

        <input
          type="search"
          placeholder="Search snippets..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-md border border-[#DCDDD8] bg-white py-2.5 pl-10 pr-3 text-[13px] text-[#242A30] placeholder:text-[#929792] outline-none transition-colors duration-150 hover:border-[#B9BDB7] focus:border-[#356859] focus:ring-2 focus:ring-[#356859]/10"
        />
      </div>

      {/* Tag filter */}
      <div className="relative shrink-0">
        <select
          onChange={(e) => onTagChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-md border border-[#DCDDD8] bg-[#F7F7F5] py-2.5 pl-3 pr-9 text-[13px] font-medium text-[#414943] outline-none transition-colors duration-150 hover:border-[#B9BDB7] focus:border-[#356859] focus:ring-2 focus:ring-[#356859]/10"
        >
          <option value="All">All tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-[#858B87]"></i>
      </div>

    </div>
  );
}

export default SearchBar;
