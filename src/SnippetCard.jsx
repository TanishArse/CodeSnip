function SnippetCard({ snippet,onDelete,onEdit}) {
  
  return (
    <div className="snippetcard">
      <div className="heading">
        <h2 className="snippet-title">
        {snippet.title}
      </h2>
        
        <div className="cardButtons">
        <button id="copy"
        onClick={() => navigator.clipboard.writeText(snippet.code)}
      >
       <i className="fa-regular fa-copy"></i>
      </button>
      <button id="delete" onClick={()=>{onDelete(snippet.id)}}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <button id= "edit" onClick={()=>onEdit(snippet)}>
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
      </div>

      </div>
      

      <pre className="snippet-code">
        {snippet.code}
      </pre>

      <div className="snippet-tags">
        {snippet.tags &&
          snippet.tags.split(",").map((tag, i) => (
            <span key={i} className="tag">
              #{tag.trim()}
              
            </span>
          ))} 
      </div>

    </div>
  );
}

export default SnippetCard;