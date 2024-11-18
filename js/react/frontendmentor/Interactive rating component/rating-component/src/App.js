import './App.css';
import ContainerRating from './components/ContainerRating/ContainerRating';
import ContainerThankyou from './components/ContainerThankyou/ContainerThankyou';
import { useState } from "react";

function App() {
  const [userChoice , setUserChoice] = useState(0);
  const [didUserChoice , setdidUserChoice] = useState(false);
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="App">
      {didUserChoice ? (<ContainerThankyou userChoice = {userChoice }/>) : 
      (<ContainerRating 
      setdidUserChoice = {setdidUserChoice} 
      setUserChoice = {setUserChoice}
      isActive = {isActive}
      setIsActive = {setIsActive}
      userChoice = {userChoice }

      />)
      }
    </div>
  );
}

export default App;
