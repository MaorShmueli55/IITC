import React from "react";
import Img from "../img";
import Intro from "../Intro";
import PreTime from "../PreTime";
import "./Head.css"


const Head = () =>{
    return(
        <div className="head">
            <Img/>
            <Intro/>
            <PreTime/>
        </div>
    )
}

export default Head;