import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import AddSnippet from "./AddSnippet";
import SnippetList from "./SnippetList";

function App() {
  const [snippets, setSnippets] = useState(()=>{
    const savedSnippets=localStorage.getItem('snippets')
    return savedSnippets?JSON.parse(savedSnippets):[];
  });
  const [SearchQuery,setSearchQuery]=useState("");
  const [selectedTag,setSelectedTag]=useState("")
  const [editingSnippet,setEditingSnippet]=useState(null);

useEffect(() => {
    localStorage.setItem("snippets", JSON.stringify(snippets));
  }, [snippets]);

  const handleAddSnippet = (snippet) => {

  if (editingSnippet) {

    setSnippets((prev) =>
      prev.map((s) =>
        s.id === editingSnippet.id
          ? { ...snippet, id: editingSnippet.id }
          : s
      )
    );

    setEditingSnippet(null);
  }
  else {

    const newSnippet = {
      ...snippet,
      id: Date.now(),
    };

    setSnippets((prev) => [newSnippet, ...prev]);
  }
};
 
  
  const query= SearchQuery.toLowerCase();

  const allTags = [
  ...new Set(
    snippets.flatMap((s) =>
      (s.tags || "")
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag)=>tag!=="")
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
  const handleEdit=(snippet)=>{
   setEditingSnippet(snippet)
  }


  return (
    <>
    <Header onSearchChange={setSearchQuery} 
    onTagChange={setSelectedTag}
    tags={allTags}
    
    />
      <AddSnippet onAdd={handleAddSnippet} editingSnippet={editingSnippet}/>
      <SnippetList snippets={filteredSnippets} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
}

export default App;