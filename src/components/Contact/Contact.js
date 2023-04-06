import React from "react";
import { NavLink } from "react-router-dom";
import './Contact.scss';

const Contact = ({img, alt, title, description, href, target}) => {
  return ( 
    <div className="contacts">
      <img src={img} alt={alt} className="contact__image"></img>
      <div className="contact">
        <h2 className="contact__title">{title}</h2>
        <NavLink to={href} target={target} className="contact__description">{description}</NavLink>
      </div>
    </div>
   );
}
 
export default Contact;



