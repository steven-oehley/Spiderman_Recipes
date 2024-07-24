import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [imageAddress, setImageAddress] = useState("");
  const ingredientInputRef = useRef(null);

  const history = useHistory();

  const { postData, data } = useFetch("http://localhost:3000/recipes", "POST");

  function handleSubmit(e) {
    e.preventDefault();
    postData({
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients,
      image: imageAddress,
    });
  }

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data, history]);

  function handleAddIngredient(e) {
    e.preventDefault();
    if (
      ingredientInput.trim() &&
      !ingredients.includes(ingredientInput.trim())
    ) {
      setIngredients((prev) => [...prev, ingredientInput.trim()]);
    }
    setIngredientInput("");
    ingredientInputRef.current.focus();
  }

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-8">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          Add a new recipe
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="block text-xl font-bold mb-2">
            Recipe Title:
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 mb-4 border border-gray-200 rounded"
            onChange={({ target }) => setTitle(target.value)}
            value={title}
            required
          />
          <label htmlFor="ingredients" className="block text-xl font-bold mb-2">
            Ingredients
          </label>
          <div className="flex mb-4">
            <input
              type="text"
              id="ingredients"
              className="w-full p-2 border border-gray-300 rounded-l"
              value={ingredientInput}
              ref={ingredientInputRef}
              onChange={(e) => setIngredientInput(e.target.value)}
            />

            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition duration-300"
              onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>
          </div>
          {ingredients.length > 0 && (
            <p className="text-slate-400 mb-2">{`Ingredients: ${ingredients.join(
              ", "
            )}`}</p>
          )}
          <label htmlFor="method" className="block text-xl font-bold mb-2">
            Method:
          </label>
          <textarea
            id="method"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
          <label htmlFor="cooking" className="block text-xl font-bold mb-2">
            Cooking Time (minutes):
          </label>
          <input
            id="cooking"
            type="number"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            min={5}
            step={5}
            max={240}
            required
          />
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
            value={imageAddress}
            onChange={(e) => setImageAddress(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
