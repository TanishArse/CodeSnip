
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddSnippet from "./components/AddSnippet";
import SnippetList from "./components/SnippetList";
import { getSnippets,createSnippet,updateSnippet,deleteSnippet } from "./api/snippetApi";

function App() {
  const [snippets,setSnippets]=useState([]);
  

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [editingSnippet, setEditingSnippet] = useState(null);
 
  useEffect(() => {
const fetchSnippets=async()=>{
    try{
      const data=await getSnippets();
      setSnippets(data);

    }catch(error){
      console.error("failed to fetch snippets",error)

    }
  } 
  fetchSnippets();
}, []);

  // Add or update snippet
  const handleAddSnippet = async (snippet) => {
    try {
        if (editingSnippet) {
            const updatedSnippet = await updateSnippet(
                editingSnippet._id,
                snippet
            );

            setSnippets((prev) =>
                prev.map((s) =>
                    s._id === editingSnippet._id
                        ? updatedSnippet
                        : s
                )
            );

            setEditingSnippet(null);
        } else {
            const response = await createSnippet(snippet);

            setSnippets((prev) => [
                response,
                ...prev
            ]);
        }

        return true;

    } catch (error) {
        console.error(
            "Failed to save snippet:",
            error.response?.data || error.message
        );
        return false;
    }
};
    

  // Search and tag filtering
  const query = searchQuery.toLowerCase();

  const allTags = [
  ...new Set(
    snippets.flatMap((s) => s.tags || [])
  ),
];

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(query) ||
      snippet.code.toLowerCase().includes(query);

    const matchesTag =
  selectedTag === "All" ||
  (snippet.tags || []).includes(selectedTag);
    return matchesSearch && matchesTag;
  });


  // Delete snippet
  const handleDelete = async(id) => {
    try{
       await deleteSnippet(id);
    setSnippets((prev) =>
      prev.filter((snippet) => snippet._id !== id)
    );
     if (editingSnippet?._id === id) {
      setEditingSnippet(null);
    }
  



    }catch(error){
      console.error("failed to delete snippet",
        error.response?.data||error.message
      )

    }}
   
   
  // Edit snippet
  const handleEdit = (snippet) => {
    setEditingSnippet(snippet);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#242A30]">

      <Header
        onSearchChange={setSearchQuery}
        onTagChange={setSelectedTag}
        tags={allTags}
      />

      <main className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:px-6 sm:py-10">

        {/* Add snippet section */}
        <section>
          <AddSnippet
            onAdd={handleAddSnippet}
            editingSnippet={editingSnippet}
          />
        </section>

        {/* Snippet collection */}
        <section className="space-y-5">

          <div className="flex items-center justify-between border-b border-[#E3E4E0] pb-3">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-[#242A30]">
                Your snippets
              </h2>

              <p className="mt-1 text-xs text-[#858B87]">
                Your saved code collection
              </p>
            </div>

            <span className="rounded-sm border border-[#DCE7DF] bg-[#F2F6F2] px-3 py-1.5 text-xs font-medium text-[#356859]">
              {filteredSnippets.length}{" "}
              {filteredSnippets.length === 1 ? "snippet" : "snippets"}
            </span>
          </div>

          {filteredSnippets.length > 0 ? (
            <SnippetList
              snippets={filteredSnippets}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ) : (
            <div className="flex min-h-48 flex-col items-center justify-center rounded-md border border-dashed border-[#D5D9D3] bg-[#FAFAF8] px-5 py-10 text-center">

              <i className="fa-regular fa-folder-open mb-3 text-2xl text-[#A1A8A1]"></i>

              <h3 className="text-sm font-semibold text-[#414943]">
                {snippets.length === 0
                  ? "No snippets yet"
                  : "No matching snippets"}
              </h3>

              <p className="mt-1 max-w-sm text-xs leading-5 text-[#858B87]">
                {snippets.length === 0
                  ? "Add your first code snippet to start building your collection."
                  : "Try changing your search query or selecting a different tag."}
              </p>

            </div>
          )}

        </section>

      </main>
    </div>
  );
}

export default App;
