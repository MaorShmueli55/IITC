import React from "react";
import img from "../../img/icon-star.svg"
import "./ContainerRating.css"

const ContainerRating = (props)=>{
    const updateChoice = (e) =>{
        props.setUserChoice(e.target.innerText)
         e.target.className = "selected-rating"
         props.setIsActive(!props.isActive)
    }
    const submit = () =>{
        props.setdidUserChoice(true);
    }
    return( 
      <div className="container rating">
              <div className="star">
                  <img src={img}/>
              </div>
              <div class="title">How did we do?</div>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
              <div id="rating-form">
                <div className="rating-num">
                  {[1, 2, 3, 4, 5].map((num) => (
                  <div
                  key={num}
                  onClick={updateChoice}
                  className={props.userChoice === String(num) ? "selected-rating" : ""}>
                    {num}
                  </div>
                  ))}
                 </div>
                  <button onClick={submit}>SUBMIT</button>
              </div>
          </div>
          )
      
}

export default ContainerRating;