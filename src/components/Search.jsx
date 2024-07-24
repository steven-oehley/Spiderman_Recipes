function Search({ searchFilter, setSearchFilter }) {
  return (
    <input
      className=" p-2 border border-gray-300 rounded mr-4 bg-slate-800 text-white"
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
