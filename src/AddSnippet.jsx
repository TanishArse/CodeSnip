import { useState } from "react";

function AddSnippet({ onAdd }) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");

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
          <label>Code:</label>
          <textarea
            rows={8}
            className="textarea"
            placeholder="Paste your code snippet here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
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
          + Add Snippet
        </button>

      </form>
    </div>
  );
}

export default AddSnippet;