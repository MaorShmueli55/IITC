import React from "react";
import Head from "./Head/Head";
import "./Head/Head.jsx"
import "./MainContainer.css"
import Recipe from "./Recipe";

const MainContainer = () =>{
    return( 
        <div className = "main-container">
            <Head/>
            <Recipe/>
        </div>
    )
}

export default MainContainer;