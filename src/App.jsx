import { useState } from "react";
import Header from "./Header";
import AddSnippet from "./AddSnippet";
import SnippetList from "./SnippetList";

function App() {
  const [snippets, setSnippets] = useState([]);
  const [SearchQuery,setSearchQuery]=useState("");
  const [selectedTag,setSelectedTag]=useState("")


  const handleAddSnippet = (snippet) => {
     const newSnippet = {
    ...snippet,
    id: Date.now()
  };
    setSnippets((prev) => [newSnippet, ...prev]);
  };
 
  
  const query= SearchQuery.toLowerCase();

  const allTags = [
  ...new Set(
    snippets.flatMap((s) =>
      (s.tags || "")
        .split(",")
        .map((tag) => tag.trim())
    )
  )
];

 const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(query) ||
      snippet.code.toLowerCase().includes(query);

   const matchesTag =
  selectedTag === "" ||
  (snippet.tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .includes(selectedTag);

    return matchesSearch && matchesTag;
  });
  const handleDelete=(id)=>{
    setSnippets(prev =>
  prev.filter(snippet => snippet.id !== id)
)
  }

  return (
    <>
    <Header onSearchChange={setSearchQuery} 
    onTagChange={setSelectedTag}
    tags={allTags}
    
    />
      <AddSnippet onAdd={handleAddSnippet} />
      <SnippetList snippets={filteredSnippets} onDelete={handleDelete} />
    </>
  );
}

export default App;