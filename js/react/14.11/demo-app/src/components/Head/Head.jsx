import React from "react";
import Intro from "../Intro";
import PreTime from "../PreTime";
import "./Head.css"


const Head = () =>{
    return(
        <div className="head">
            <Intro/>
            <PreTime/>
        </div>
    )
}

export default Head;