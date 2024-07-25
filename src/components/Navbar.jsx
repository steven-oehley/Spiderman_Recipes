import { NavLink } from "react-router-dom";
import Search from "./Search";
import { useTheme } from "../hooks/useTheme"; // Import the custom hook

import lightThemeIcon from "../assets/img/light-icon.webp"; // Update the path as necessary
import darkThemeIcon from "../assets/img/dark-icon.webp"; // Update the path as necessary

function Navbar({ searchFilter, setSearchFilter }) {
  const { mode, setMode } = useTheme(); // Use the custom hook to access theme context

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`${
        mode === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <NavLink to="/" exact>
            <h1
              className={`${
                mode === "dark" ? "text-white" : "text-black"
              } text-4xl font-bold hover:text-red-600`}
            >
              Spidey's Cookbook
            </h1>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <p
            className={`${
              mode === "dark" ? "text-slate-300" : "text-gray-700"
            }`}
          >{`Set ${mode === "dark" ? "light" : "dark"} mode:`}</p>
          <button className="focus:outline-none" onClick={toggleTheme}>
            <img
              src={mode === "light" ? lightThemeIcon : darkThemeIcon}
              alt="Theme switch icon"
              className="w-8 h-8"
            />
          </button>
        </div>
        <div className="flex items-center gap-4">
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
