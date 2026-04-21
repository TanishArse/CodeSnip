function SnippetCard({ snippet }) {
  return (
    <div className="snippetcard">
       <button id="copy"
        onClick={() => navigator.clipboard.writeText(snippet.code)}
      >
       <i className="fa-regular fa-copy"></i>
      </button>

      <h2 className="snippet-title">
        {snippet.title}
      </h2>

      <pre className="snippet-code">
        {snippet.code}
      </pre>

      <div className="snippet-tags">
        {snippet.tags &&
          snippet.tags.split(",").map((tag, i) => (
            <span key={i} className="tag">
              {tag.trim()}
            </span>
          ))}
      </div>

      

    </div>
  );
}

export default SnippetCard;