import { NavLink } from "react-router-dom";
import Search from "./Search";

function Navbar({ searchFilter, setSearchFilter }) {
  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div>
          <NavLink to="/" exact>
            <h1 className="text-4xl font-bold text-white hover:text-red-600">
              Spidey's Cookbook
            </h1>
          </NavLink>
        </div>
        <div>
          <Search
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
          <NavLink
            to="/create"
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
          >
            Create
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
