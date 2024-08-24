// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import useRecipeStore from '../components/recipeStore';

function RecommendationsList () {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const recommendations = useRecipeStore((state) => state.recommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available at the moment.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
