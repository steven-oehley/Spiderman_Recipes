import { useTheme } from "../hooks/useTheme"; // Import the custom hook

function Search({ searchFilter, setSearchFilter }) {
  const { mode } = useTheme(); // Use the custom hook to access theme context

  return (
    <input
      className={`p-2 border rounded mr-4 ${
        mode === "dark"
          ? "bg-slate-800 text-white border-gray-300"
          : "bg-white text-black border-gray-700"
      }`}
      type="text"
      id="search"
      placeholder="Search Recipes 🔍"
      aria-label="search recipes"
      value={searchFilter}
      onChange={(e) => setSearchFilter(e.target.value)}
    />
  );
}

export default Search;
