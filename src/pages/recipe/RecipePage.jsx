import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme"; // Import the custom hook

import RecipeCard from "./components/RecipeCard";

function RecipePage() {
  const { id } = useParams();
  const {
    data: recipe,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  const { mode } = useTheme(); // Use the custom hook to access theme context

  return (
    <section
      className={`min-h-screen ${
        mode === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto items-center py-8">
        {isLoading && (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg text-red-600"></span>
          </div>
        )}
        {error && <p className="text-red-600">Error: {error.message}</p>}
        {recipe && <RecipeCard recipe={recipe} />}
      </div>
    </section>
  );
}
export default RecipePage;
