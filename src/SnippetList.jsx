import SnippetCard from "./SnippetCard";

function SnippetList({ snippets,onDelete}) {
  

  return (
    <div id="snippetlist">
      {snippets.map((snippet) => (
        <div key={snippet.id}>
        <SnippetCard 
         snippet={snippet} 
         onDelete={onDelete}
        />
        </div>
      ))}
      
    </div>
  );
}

export default SnippetList;