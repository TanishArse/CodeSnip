import SnippetCard from "./SnippetCard";

function SnippetList({ snippets}) {
  

  return (
    <div id="snippetlist">
      {snippets.map((snippet, index) => (
        <div key={index}>
        <SnippetCard  snippet={snippet} />
        </div>
      ))}
      
    </div>
  );
}

export default SnippetList;