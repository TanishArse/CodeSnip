import Logo from "./logo";
import SearchBar from "./SearchBar";

function Header({ onSearchChange, onTagChange, tags }) {
  return (
    <header className="border-b border-[#E3E4E0] bg-[#F7F7F5]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Brand */}
        <a href="/" className="flex w-fit items-center gap-2.5">
          <Logo />

          <h1 className="text-[21px] font-semibold tracking-tight text-[#242A30]">
            Code<span className="font-normal text-[#356859]">Snip</span>
          </h1>

          <div className="mx-2 hidden h-7 w-px bg-[#DCDDD8] sm:block" />

          <div className="hidden sm:block">
            <p className="text-[10px] font-semibold tracking-[1.2px] text-[#414943]">
              YOUR CODE LIBRARY
            </p>
            <p className="text-[11px] text-[#929792]">
              Save. Organize. Reuse.
            </p>
          </div>
        </a>

        {/* Search and filters */}
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <SearchBar
            onSearchChange={onSearchChange}
            onTagChange={onTagChange}
            tags={tags}
          />
        </div>

      </div>
    </header>
  );
}

export default Header;
