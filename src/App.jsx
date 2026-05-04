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

  
  const query= SearchQuery.toLowerCase();

  const filteredSnippets=snippets.filter((snippet)=>
    snippet.title.toLowerCase().includes(query) ||
    snippet.code.toLowerCase().includes(query));

  return (
    <>
    <Header onSearchChange={setSearchQuery} />
      <AddSnippet onAdd={handleAddSnippet} />
      <SnippetList snippets={filteredSnippets} />
    </>
  );
}

export default App;