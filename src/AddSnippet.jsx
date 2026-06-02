import {useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

function AddSnippet({ onAdd ,editingSnippet}) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");
  const [language, setLanguage] = useState("javascript");
  const languages=[ "javascript",
  "python",
  "cpp",
  "java",
  "html",
  "css"
];

  useEffect(() => {
  if (editingSnippet) {
    setTitle(editingSnippet.title);
    setCode(editingSnippet.code);
    setTags(editingSnippet.tags);
  }
}, [editingSnippet]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !code) return; 

    const newSnippet = {
      title,
      code,
      tags
    };

    onAdd(newSnippet);

    setTitle("");
    setCode("");
    setTags("");
  };

  return (
    <div id="formbox">
      <form className="form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Title:</label>
          <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Select a language:</label>
          <select id="langdropDown"
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
>
  {languages.map((lang) => (
    <option key={lang} value={lang}>
      {lang}
    </option>
  ))}
</select>
          <label>Code:</label>
          <Editor
           height="300px"
           width="100%"
           language={language.toLowerCase()}
           value={code}
           onChange={(value) => setCode(value || "")}
            options={{
              fontSize: 16,
    fontFamily: "JetBrains Mono",
    minimap: { enabled: false },
    automaticLayout: true,
    wordWrap: "on",
    scrollBeyondLastLine: false,
    padding: {
      top: 16,
    },
    cursorBlinking: "smooth",
    cursorSmoothCaretAnimation: "on",
    smoothScrolling: true,
    roundedSelection: true,
    lineNumbersMinChars: 3,
    
  }}
           
          
/>
        </div>

        <div className="form-group">
          <label>Tags:</label>
          <input
            className="input"
            type="text"
            placeholder="e.g. react, js, api"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <br />
        <button id="submitbutton" type="submit">
          {/* + Add Snippet */}
           {editingSnippet ? "Update Snippet" : "Add Snippet"}
        </button>

      </form>
    </div>
  );


}

export default AddSnippet;