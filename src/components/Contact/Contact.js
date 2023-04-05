import React from "react";
import './Contact.scss';

const Contact = ({img, alt, title, description}) => {
  return ( 
    <div className="contacts">
      <img src={img} alt={alt}></img>
      <div className="contact">
        <h3 className="contact__title">{title}</h3>
        <p className="contact__description">{description}</p>
      </div>
    </div>
   );
}
 
export default Contact;



