import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme"; // Import the custom hook

function CreatePage() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [imageAddress, setImageAddress] = useState("");
  const ingredientInputRef = useRef(null);

  const history = useNavigate();

  const { postData, data } = useFetch("http://localhost:3000/recipes", "POST");

  const { mode } = useTheme(); // Use the custom hook to access theme context

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
    <div
      className={`relative min-h-screen flex items-center justify-center p-8 ${
        mode === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`p-8 rounded-lg shadow-lg max-w-lg w-full ${
          mode === "dark" ? "bg-slate-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-4xl font-bold mb-4 ${
            mode === "dark" ? "text-red-600" : "text-red-600"
          }`}
        >
          Add a new recipe
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="block text-xl font-bold mb-2">
            Recipe Title:
          </label>
          <input
            type="text"
            id="title"
            className={`w-full p-2 mb-4 border rounded ${
              mode === "dark" ? "border-gray-200" : "border-gray-700"
            } ${
              mode === "dark"
                ? "bg-slate-800 text-white"
                : "bg-white text-black"
            }`}
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
              className={`w-full p-2 border rounded-l ${
                mode === "dark" ? "border-gray-300" : "border-gray-700"
              } ${
                mode === "dark"
                  ? "bg-slate-800 text-white"
                  : "bg-white text-black"
              }`}
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
            <p
              className={`${
                mode === "dark" ? "text-slate-400" : "text-gray-700"
              } mb-2`}
            >{`Ingredients: ${ingredients.join(", ")}`}</p>
          )}
          <label htmlFor="method" className="block text-xl font-bold mb-2">
            Method:
          </label>
          <textarea
            id="method"
            className={`w-full p-2 mb-4 border rounded ${
              mode === "dark" ? "border-gray-300" : "border-gray-700"
            } ${
              mode === "dark"
                ? "bg-slate-800 text-white"
                : "bg-white text-black"
            }`}
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
            className={`w-full p-2 mb-4 border rounded ${
              mode === "dark" ? "border-gray-300" : "border-gray-700"
            } ${
              mode === "dark"
                ? "bg-slate-800 text-white"
                : "bg-white text-black"
            }`}
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            min={5}
            step={5}
            max={240}
            required
          />
          <label htmlFor="image" className="block text-xl font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            className={`w-full p-2 mb-4 border rounded ${
              mode === "dark" ? "border-gray-300" : "border-gray-700"
            } ${
              mode === "dark"
                ? "bg-slate-800 text-white"
                : "bg-white text-black"
            }`}
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
