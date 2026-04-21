import { useState } from "react";
import Header from "./Header";
import AddSnippet from "./AddSnippet";
import SnippetList from "./SnippetList";

function App() {
  const [snippets, setSnippets] = useState([]);

  const handleAddSnippet = (snippet) => {
    setSnippets((prev) => [snippet, ...prev]);
  };

  return (
    <>
    <Header/>
      <AddSnippet onAdd={handleAddSnippet} />
      <SnippetList snippets={snippets} />
    </>
  );
}

export default App;