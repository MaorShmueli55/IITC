import React from "react";
import "./Ingredients.css"

const Ingredients = () =>{
    return( 
        <div className = "ingredients">
            <p className="title">Ingredients</p>
            <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li> Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
            <hr />
        </div>
    )
}

export default Ingredients;