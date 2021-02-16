import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/Card";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
// const randomApi = "https://www.themealdb.com/api/json/v1/1/random.php";
// const mealDetailApi = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search recipe
  const searchRecipes = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <h2>Recipe App</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={searchRecipes}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Recipes To Show."}
      </div>
    </div>
  );
}

export default App;
