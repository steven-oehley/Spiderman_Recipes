import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme"; // Import the custom hook

function RecipeList({ recipes }) {
  const { mode } = useTheme(); // Use the custom hook to access theme context

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {recipes?.map((recipe) => (
        <li
          key={recipe.id}
          className={`p-4 rounded-lg shadow-xl flex flex-col justify-between h-full transition-transform transform hover:rotate-2 hover:scale-105 ${
            mode === "dark"
              ? "bg-slate-800"
              : "bg-white border-4 border-solid border-black"
          }`}
        >
          <h2 className="text-xl font-bold text-red-600">{recipe.title}</h2>
          <p
            className={`mt-1 mb-4 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            {recipe.cookingTime} cooking time
          </p>
          <p className={mode === "dark" ? "text-white" : "text-black"}>
            {recipe.method.substring(0, 100)}...
          </p>
          <div className="flex justify-center mt-4">
            <Link
              to={`/recipe/${recipe.id}`}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
            >
              Cook this
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
