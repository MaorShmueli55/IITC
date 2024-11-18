import React from "react";
import img from "../../img/illustration-thank-you.svg"
import "./ContainerThankyou.css"


const ContainerThankyou = (props)=> {
    return( 
    <div class="container thankYou hidden">
    <img src = {img}/>
    <div class="result">You selected {props.userChoice} out of 5</div>
    <div class="title">Thank you!</div>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
</div>
)
}

export default ContainerThankyou;