import React from "react";
import lckImage from "../assets/LCK.png";
import "./Main.css"

function Main(){
  return (
    <div className="main-image">
      <img src={lckImage} alt="LCK image" />
    </div>
  )
}

export default Main