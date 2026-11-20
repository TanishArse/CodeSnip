
import SnippetCard from "./SnippetCard";

function SnippetList({ snippets, onDelete, onEdit }) {
  return (
    <div
      id="snippetlist"
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet._id}
          snippet={snippet}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default SnippetList;

