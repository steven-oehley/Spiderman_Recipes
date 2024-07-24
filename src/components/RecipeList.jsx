import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {recipes?.map((recipe) => (
        <li
          key={recipe.id}
          className="bg-slate-800 p-4 rounded-lg shadow-lg flex flex-col justify-between h-full transition-transform transform hover:rotate-2 hover:scale-105"
        >
          <h2 className="text-xl font-bold text-red-600">{recipe.title}</h2>
          <p className="text-white mt-1 mb-4">
            {recipe.cookingTime} cooking time
          </p>
          <p className="text-white">{recipe.method.substring(0, 100)}...</p>
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
