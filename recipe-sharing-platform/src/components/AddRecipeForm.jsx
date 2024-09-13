import  { useState } from 'react';

export default function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation to ensure all fields are filled
    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    // Reset the error if validation passes
    setError('');

    // In a real scenario, you would submit this data to a server or update the state
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),  // Split ingredients by line
      instructions: instructions.split('\n') // Split instructions by line
    };

    console.log(newRecipe);  // For now, we'll just log the new recipe data

    // Clear form fields after submission
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (separate by line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Enter ingredients, each on a new line"
          />
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Instructions (separate by line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Enter preparation steps, each on a new line"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
