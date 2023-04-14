import React from "react";
import { NavLink } from "react-router-dom";
import './Service.scss';
import { ServiceV } from "./svg";

const Service = ({img, alt, title, description}) => {
  return ( 
  <div className="service-card">
    <div className="service-card__border">
      <img src={img} alt={alt} className="service-card__image"></img>
      <svg className="service-card__vector"><ServiceV /></svg>
    </div>
    <h1 className="service-card__title">{title}</h1>
    <p className="service-card__description">{description}</p>
    <NavLink to='/join' className="service-card__button">TRY IT NOW</NavLink>
  </div> 
  
  );
}
 
export default Service;