import { imageMap } from "../../../data/imageData";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  // Find the image for the recipe
  const image = imageMap[+recipe.id];

  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img
          src={image ? image : recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3 md:pl-4 flex flex-col justify-between">
        <div className="mb-4">
          <h2 className="text-4xl font-bold text-red-600">{recipe.title}</h2>
          <p className="text-white mt-2">{recipe.cookingTime} cooking time</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-white">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white  mb-2">Method:</h3>
          <ol className="list-decimal list-inside">
            {recipe.method.split(". ").map((step, index) =>
              step.length < 5 ? null : (
                <li key={index} className="text-white">
                  {step}
                </li>
              )
            )}
          </ol>
          <div className="flex justify-center mt-4">
            <Link
              to="/"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
            >
              Back to all recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
