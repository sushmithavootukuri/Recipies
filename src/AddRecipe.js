import React, { useState } from "react";
import * as yup from "yup";
import useForm from "react-hook-form";

const SignupSchema = yup.object().shape({
  recipeName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, " Only alphabets are allowed")
    .required(" Enter Recipe name"),
  ingredient: yup.string().required(" Add atleast one ingredient"),
  instruction: yup.string().required(" Add atleast one instruction")
});

export default function AddRecipe({ setRecipesList }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="col-sm-8  col-lg-7 mx-auto">
      <div className="text-center mt-3">
        <button
          className="btn btn-warning navbar-btn mx-5 my-5 p-2"
          onClick={() => setToggle(!toggle)}
        >
          Add Recipe
        </button>
      </div>

      {toggle && (
        <AddRecipeForm setRecipesList={setRecipesList} setToggle={setToggle} />
      )}
    </div>
  );
}

function AddRecipeForm({ setToggle, setRecipesList }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [instruction, setInstruction] = useState("");
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });

  const ViewEachItem = (props) => (
    <div>
      <div className="col-50" />
      <input type="text" size="30" readOnly value={props.item}></input>
    </div>
  );

  const onSubmit = () => {
    if (ingredients.length === 0) alert("Add ingredients before saving");
    else if (instructions.length === 0) alert("Add instructions before saving");
    else {
      const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
      const newRecipes = [
        ...recipes,
        {
          recipeName: name,
          ingredients: ingredients,
          instructions: instructions
        }
      ];
      localStorage.setItem("recipes", JSON.stringify(newRecipes));
      setRecipesList(newRecipes);
      setToggle(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card p-lg-5">
        <div className="col-11 mx-auto ">
          <label className="col-50">Recipe Name </label>
          <input
            type="text"
            name="recipeName"
            placeholder="Recipe Name"
            size="30"
            ref={register}
            onChange={(event) => setName(event.target.value)}
          ></input>
          {errors.recipeName && <p className="error">{errors.recipeName}</p>}

          <label className="col-50">Ingredients </label>
          <input
            name="ingredient"
            type="text"
            size="30"
            value={ingredient}
            placeholder="Enter Ingredient"
            ref={register}
            onChange={(e) => setIngredient(e.target.value)}
          ></input>
          <b
            className="py-2 plus"
            onClick={() => {
              if (ingredient !== " ") {
                setIngredients([...ingredients, ingredient]);
                setIngredient(" ");
              }
            }}
          >
            +
          </b>
          {ingredients.map(
            (item, index) => item && <ViewEachItem item={item} index={index} />
          )}

          {errors.ingredient && <p className="error">{errors.ingredient}</p>}

          <label className="col-50">Instructions </label>
          <input
            name="instruction"
            type="text"
            size="30"
            value={instruction}
            placeholder="Enter Instruction"
            ref={register}
            onChange={(e) => setInstruction(e.target.value)}
          ></input>
          <b
            className="py-2 plus"
            onClick={() => {
              if (instruction !== " ") {
                setInstructions([...instructions, instruction]);
                setInstruction(" ");
              }
            }}
          >
            +
          </b>
          {instructions.map(
            (item, index) => item && <ViewEachItem item={item} index={index} />
          )}

          {errors.instruction && <p className="error">{errors.instruction}</p>}

          <div className="text-center mt-3">
            <input type="submit" value="Save" className="btn btn-warning" />
          </div>
        </div>
      </div>
    </form>
  );
}
