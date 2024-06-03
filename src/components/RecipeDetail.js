import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold">{recipe.name}</h2>
      <img src={recipe.image || 'https://via.placeholder.com/200'} alt={recipe.name} className="w-full max-w-[200px] max-h-[200px] object-cover" />
      <h3 className="text-lg font-semibold mt-4">Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mt-4">Preparation Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
