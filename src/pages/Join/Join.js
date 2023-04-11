import React from "react";
import "./Join.scss";
import { JoinDesktop, JoinMobile } from "./svg";

const Join = () => {

  const isMobile = window.innerWidth <= 768;

  return (
  <section className="join">
    {isMobile? 
    <svg className="join-mobile-vector"><JoinMobile /></svg> : <svg className="join-desktop-vector"><JoinDesktop /></svg>}    
    <h1 className="join__title">JOIN HYDRA</h1>
    <h2 className="join__subtitle">Let's Build Your VR Experience</h2>
    <form className="join__form">
      <input type="text" name="FirstName" placeholder="First Name" className="join__form__input"></input>
      <input type="text" name="LastName" placeholder="Last Name" className="join__form__input"></input>
      <input type="text" name="Email" placeholder="Email" className="join__form__input"></input>
      <input type="number" name="Phone" placeholder="Phone Number" className="join__form__input"></input>
      <input type="text" name="Subject" placeholder="Subject" className="join__form__input subject"></input>
      <textarea name="About" placeholder="Tell Us Something..."className="join__form__input_area"></textarea>
      <button type="submit" className="join__form__button">SEND TO HYDRA</button>
    </form>
  </section>  
  );
}
 
export default Join;