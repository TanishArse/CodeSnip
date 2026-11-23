import { useState } from "react";

function SnippetCard({ snippet, onDelete, onEdit }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <article className="flex h-105 min-w-0 flex-col overflow-hidden rounded-md border border-[#E3E4E0] bg-white transition-colors hover:border-[#C5CCC5]">

      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#EAEAE6] bg-[#FAFAF8] px-4 py-3">

        <h2 className="min-w-0 truncate text-[15px] font-semibold text-[#242A30]">
          {snippet.title}
        </h2>

        <div className="flex shrink-0 items-center gap-1">
          <button
            title={copied ? "Copied!" : "Copy code"}
            aria-label={copied ? "Copied!" : "Copy code"}
            onClick={handleCopy}
            className="flex h-8 w-8 items-center justify-center rounded text-[#777F79] hover:bg-[#EAEDE8] hover:text-[#356859]"
          >
            {copied ? (
              <i className="fa-solid fa-check text-[#356859]"></i>
            ) : (
              <i className="fa-regular fa-copy"></i>
            )}
          </button>

          <button
            title="Edit snippet"
            onClick={() => onEdit(snippet)}
            className="flex h-8 w-8 items-center justify-center rounded text-[#777F79] hover:bg-[#EAEDE8] hover:text-[#356859]"
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>

          <button
            title="Delete snippet"
            onClick={() => onDelete(snippet._id)}
            className="flex h-8 w-8 items-center justify-center rounded text-[#929792] hover:bg-[#FCEEEE] hover:text-[#B74747]"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>

      {/* Scrollable code area */}
      <div className="min-h-0 flex-1 overflow-auto bg-[#242A30] p-4">
        <pre className="whitespace-pre font-mono text-[13px] leading-6 text-[#D6DDD8]">
          {snippet.code}
        </pre>
      </div>

      {/* Tags */}
      <div className="flex shrink-0 flex-wrap items-center gap-2 border-t border-[#EAEAE6] bg-white px-4 py-3">
  {(snippet.tags || [])
    .filter(tag => typeof tag === "string")
    .map((tag, i) => (
      <span
        key={i}
        className="rounded-sm border border-[#DCE7DF] bg-[#F2F6F2] px-2 py-1 text-[11px] font-medium text-[#356859]"
      >
        #{tag.trim()}
      </span>
    ))}
</div>

    </article>
  );
}

export default SnippetCard;
