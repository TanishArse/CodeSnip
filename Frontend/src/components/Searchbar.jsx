function SearchBar({ onSearchChange, onTagChange, tags = [] }) {
  return (
    <div className="flex items-center gap-3 w-full max-w-2xl">
      <div className="relative flex-1">
        <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      <select
        onChange={(e) => onTagChange(e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      >
        <option value="All">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;