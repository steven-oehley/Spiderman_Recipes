import RecipeList from "../../components/RecipeList";

import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import image from "../../assets/img/spider-cookbook.webp";

function HomePage({ searchFilter }) {
  const { data, isLoading, error } = useFetch("http://localhost:3000/recipes");
  const [recipes, setRecipes] = useState([]);

  // Update recipes state when data is fetched
  useEffect(() => {
    if (data && !isLoading) {
      searchFilter
        ? setRecipes(
            data.filter((item) =>
              item.title.toLowerCase().includes(searchFilter.toLowerCase())
            )
          )
        : setRecipes(data);
    }
  }, [data, isLoading, searchFilter]);

  return (
    <section className="min-h-screen bg-black text-black">
      <div className="container mx-auto items-center py-8">
        {isLoading && (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg text-red-600"></span>
          </div>
        )}
        {error && <p className="text-red-600">Error: {error.message}</p>}
        {recipes.length > 0 ? (
          <RecipeList recipes={recipes} />
        ) : (
          <div className="flex items-center flex-col gap-6">
            <p className="text-slate-200 text-2xl">
              No recipes found, for your search....
            </p>
            <img src={image} alt="no results" className="w-1/3" />
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;
