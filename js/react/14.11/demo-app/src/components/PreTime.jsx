import React from "react";
import "./PreTime.css"

const PreTime = () =>{
    return( 
        <div className = "preTime">
            <p className="preTitle">Preparation time</p> 
            <ul>
                <li><span>Total:</span> Approximately 10 minutes</li>
                <li><span>Preparation:</span> 5 minutes</li>
                <li><span>Cooking:</span> 5 minutes</li>
            </ul>
        </div>
    )
}

export default PreTime;