import { useState } from "react";
import Header from "./Header";
import AddSnippet from "./AddSnippet";
import SnippetList from "./SnippetList";

function App() {
  const [snippets, setSnippets] = useState([]);

  const handleAddSnippet = (snippet) => {
    setSnippets((prev) => [snippet, ...prev]);
  };
  const [SearchQuery,setSearchQuery]=useState("");
  const [selectedTag,setSelectedTag]=useState("")

  
  const query= SearchQuery.toLowerCase();

  const allTags=[...new Set(snippets.flatMap((s)=>s.tags??[]))]

 const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(query) ||
      snippet.code.toLowerCase().includes(query);

    const matchesTag =
      selectedTag === "" || (snippet.tags ?? []).includes(selectedTag); // ← new

    return matchesSearch && matchesTag;
  });
  

  return (
    <>
    <Header onSearchChange={setSearchQuery} 
    onTagChange={setSelectedTag}
    tags={allTags}
    />
      <AddSnippet onAdd={handleAddSnippet} />
      <SnippetList snippets={filteredSnippets} />
    </>
  );
}

export default App;