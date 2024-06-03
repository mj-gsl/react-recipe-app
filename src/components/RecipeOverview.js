import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeOverview = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4 rounded">
          <h2 className="text-xl font-bold">{recipe.name}</h2>
          <img src={recipe.image || 'https://via.placeholder.com/200'} alt={recipe.name} className="w-full max-w-[200px] max-h-[200px] object-cover" />
          <Link to={`/recipe/${recipe.id}`} className="text-blue-500">View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeOverview;
