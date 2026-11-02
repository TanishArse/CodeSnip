import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header({ onSearchChange, onTagChange, tags }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="flex items-center gap-2">
          <Logo />
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Code<span className="text-blue-600">Snip</span>
          </h1>
        </a>

        <SearchBar
          onSearchChange={onSearchChange}
          onTagChange={onTagChange}
          tags={tags}
        />
      </div>
    </header>
  );
}

export default Header;