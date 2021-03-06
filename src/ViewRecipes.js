import React, { useState } from "react";
export default function ViewAllRecipe({ recipesList }) {
  return (
    <div className="col-sm-8  col-lg-7 mx-auto">
      {recipesList.map((recipe) => (
        <ViewRecipe recipe={recipe} />
      ))}
    </div>
  );
}

const ViewRecipe = ({ recipe }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="card mx-md-2 my-4 text-center"
      onClick={() => setToggle(!toggle)}
    >
      {recipe.img ? (
        <img
          className="card-img-top my-4 img-fluid w-25 h-25 mx-auto "
          src={recipe.img}
          alt={recipe.name}
        ></img>
      ) : (
        ""
      )}
      {recipe.recipeName ? (
        <h3 className="card-header mx-auto bg-warning text-white">
          {recipe.recipeName}
        </h3>
      ) : (
        ""
      )}
      {toggle ? <ViewRecipeDetails recipe={recipe} /> : ""}
    </div>
  );
};

const ViewRecipeDetails = ({ recipe }) => (
  <div className="card-body">
    <h4>Ingredients</h4>
    <DisplayListItems list={recipe.ingredients} />
    <br />
    <h4>Instructions</h4>
    <DisplayListItems list={recipe.instructions} />
  </div>
);

export const DisplayListItems = (props) => (
  <div>
    {props.list.map((item) => (
      <p className="card-text">{item}</p>
    ))}
  </div>
);
