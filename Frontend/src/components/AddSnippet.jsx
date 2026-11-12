
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

function AddSnippet({ onAdd, editingSnippet }) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");
  const [language, setLanguage] = useState("javascript");

  const languages = [
    "javascript",
    "python",
    "cpp",
    "java",
    "html",
    "css",
  ];

  useEffect(() => {
    if (editingSnippet) {
      setTitle(editingSnippet.title);
      setCode(editingSnippet.code);
      setTags(editingSnippet.tags);
      setLanguage(editingSnippet.language || "javascript");
    }
  }, [editingSnippet]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !code.trim()) return;

    const newSnippet = {
      title,
      code,
      tags,
      language,
    };

    onAdd(newSnippet);

    setTitle("");
    setCode("");
    setTags("");
    setLanguage("javascript");
  };

  return (
    <div
      id="formbox"
      className="w-full rounded-lg border border-[#E3E4E0] bg-white p-5 sm:p-6"
    >
      <form onSubmit={handleSubmit} className="space-y-5">

       
        <div className="border-b border-[#EAEAE6] pb-4">
          <h2 className="text-lg font-semibold tracking-tight text-[#242A30]">
            {editingSnippet ? "Edit snippet" : "New snippet"}
          </h2>
          <p className="mt-1 text-xs text-[#858B87]">
            {editingSnippet
              ? "Update your saved code snippet."
              : "Save a reusable piece of code to your collection."}
          </p>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <label
            htmlFor="snippet-title"
            className="block text-sm font-medium text-[#414943]"
          >
            Title
          </label>

          <input
            id="snippet-title"
            className="w-full rounded-md border border-[#DCDDD8] bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#242A30] outline-none transition-colors placeholder:text-[#929792] hover:border-[#B9BDB7] focus:border-[#356859] focus:ring-2 focus:ring-[#356859]/10"
            type="text"
            placeholder="e.g. React useState example"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Language selector */}
        <div className="space-y-2">
          <label
            htmlFor="langdropDown"
            className="block text-sm font-medium text-[#414943]"
          >
            Language
          </label>

          <div className="relative w-full sm:w-56">
            <select
              id="langdropDown"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full appearance-none rounded-md border border-[#DCDDD8] bg-[#FAFAF8] px-3 py-2.5 pr-9 text-sm text-[#414943] outline-none transition-colors hover:border-[#B9BDB7] focus:border-[#356859] focus:ring-2 focus:ring-[#356859]/10"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#858B87]"></i>
          </div>
        </div>

        {/* Code editor */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#414943]">
            Code
          </label>

          <div className="overflow-hidden rounded-md border border-[#343D43]">
            <Editor
              height="300px"
              width="100%"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                fontSize: 14,
                fontFamily: "JetBrains Mono",
                minimap: { enabled: false },
                automaticLayout: true,
                wordWrap: "on",
                scrollBeyondLastLine: false,
                padding: { top: 16 },
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: "on",
                smoothScrolling: true,
                roundedSelection: true,
                lineNumbersMinChars: 3,
              }}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <label
            htmlFor="snippet-tags"
            className="block text-sm font-medium text-[#414943]"
          >
            Tags
          </label>

          <input
            id="snippet-tags"
            className="w-full rounded-md border border-[#DCDDD8] bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#242A30] outline-none transition-colors placeholder:text-[#929792] hover:border-[#B9BDB7] focus:border-[#356859] focus:ring-2 focus:ring-[#356859]/10"
            type="text"
            placeholder="e.g. react, js, api"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <p className="text-[11px] text-[#929792]">
            Separate multiple tags with commas.
          </p>
        </div>

        {/* Submit */}
        <div className="border-t border-[#EAEAE6] pt-4">
          <button
            type="submit"
            className="w-full rounded-md bg-[#356859] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#285448] focus:outline-none focus:ring-2 focus:ring-[#356859]/30 focus:ring-offset-2 sm:w-auto"
          >
            <i className={`fa-solid ${editingSnippet ? "fa-check" : "fa-plus"} mr-2 text-xs`}></i>
            {editingSnippet ? "Update Snippet" : "Add Snippet"}
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddSnippet;
