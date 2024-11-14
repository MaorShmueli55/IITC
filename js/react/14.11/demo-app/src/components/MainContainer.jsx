import React from "react";
import Head from "./Head";
import "./Head.css"
import "./MainContainer.css"
import Recipe from "./Recipe";

const MainContainer = () =>{
    return( 
        <div className = "main-container">
            main-container
            <Head/>
            <Recipe/>
        </div>
    )
}

export default MainContainer;