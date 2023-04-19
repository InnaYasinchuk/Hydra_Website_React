import React from "react";
import "./TechnologiesCard.scss";

const TechnologiesCard = ({img, alt}) => {
  return ( 
  <div className="image-box" >
    <img src={img} alt={alt} className="technologies_item"></img>
    
  </div> 
  
  );
}
 
export default TechnologiesCard;