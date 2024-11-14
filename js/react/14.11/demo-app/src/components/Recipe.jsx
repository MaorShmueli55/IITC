import React from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

const Recipe = () =>{
    return(
        <div className="recipe">
            this is the recipe
            <Ingredients/>
            <Instructions/>
            <Nutrition/>
        </div>
    )
}

export default Recipe;