import SnippetCard from "./SnippetCard";

function SnippetList({ snippets }) {
  return (
    <div id="snippetlist">
      {snippets.map((snippet, index) => (
        <SnippetCard key={index} snippet={snippet} />
      ))}
    </div>
  );
}

export default SnippetList;