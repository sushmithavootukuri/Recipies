import * as data from "./content.json";
import ViewAllRecipe from "./ViewRecipes";
import AddRecipe from "./AddRecipe";
import React, { useState } from "react";

export default function Home() {
  return <ViewAllRecipe recipesList={data.recipesList} />;
}

export function AddRecipes() {
  const [recipesList, setRecipesList] = useState(
    JSON.parse(localStorage.getItem("recipes")) || []
  );

  return (
    <div>
      <AddRecipe recipesList={recipesList} setRecipesList={setRecipesList} />
      <ViewAllRecipe recipesList={recipesList} />
    </div>
  );
}
