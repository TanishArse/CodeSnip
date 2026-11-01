import SnippetCard from "./SnippetCard";

function SnippetList({ snippets,onDelete,onEdit}) {
  

  return (
    <div id="snippetlist">
      {snippets.map((snippet) => (
        <div key={snippet.id}>
        <SnippetCard 
         snippet={snippet} 
         onDelete={onDelete}
         onEdit={onEdit}
        />
        </div>
      ))}
      
    </div>
  );
}

export default SnippetList;