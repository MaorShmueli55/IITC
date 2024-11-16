import React from "react";
import "./Nutrition.css"

const Nutrition = () =>{
    return( 
        <div className = "n">
            <p className="title">Nutrition</p>
            <p>The table below shows nutritional values per serving without the additional fillings</p>
            <div className="nutriton-container">
            <div className="nutriton-name">
              <span>Calories</span>
            </div>
            <div className="nutriton">
              <span>277kcal</span>
            </div>
          </div>

          <hr />

          <div className="nutriton-container">
            <div className="nutriton-name">
              <span>Carbs</span>
            </div>
            <div className="nutriton">
              <span>0g</span>
            </div>
          </div>

          <hr />

          <div className="nutriton-container">
            <div className="nutriton-name">
              <span>Protien</span>
            </div>
            <div className="nutriton">
              <span>20g</span>
            </div>
          </div>

          <hr />

          <div className="nutriton-container">
            <div className="nutriton-name">
              <span>Fat</span>
            </div>
            <div className="nutriton">
              <span>22g</span>
            </div>
          </div>
        </div>
    )
}

export default Nutrition;