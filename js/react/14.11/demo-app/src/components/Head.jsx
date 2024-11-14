import React from "react";
import Intro from "./Intro";
import PreTime from "./PreTime";

const Head = () =>{
    return(
        <div className="head">
            this is the head
            <img src="../../recipe-page-main/assets/images/image-omelette.jpeg"></img>
            <Intro/>
            <PreTime/>
        </div>
    )
}

export default Head;