import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { Logo, H, Y, D, R, A  } from "../svg";


const Navbar = () => {
  return (
    <header className="header container">
      <div className="header-logo">
      <NavLink to='/'>       
          <span className="header-logo__item-img"><Logo /></span>
      </NavLink> 
      <NavLink to='/'>   
          <span className="header-logo__item"><H /></span>
          <span className="header-logo__item"><Y /></span>
          <span className="header-logo__item"><D /></span>
          <span className="header-logo__item"><R /></span>
          <span className="header-logo__item"><A /></span>
      </NavLink>
      </div>
      <nav className="header-menu">
        <ul className="header-menu-list">
          <li><NavLink to='/about'className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} >About</NavLink></li>
          <li><NavLink to='/services' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} >Services</NavLink></li>
          <li><NavLink to='/technologies' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} >Technologies</NavLink></li>
          <li><NavLink to='/how_to' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} >How to</NavLink></li>
        </ul>
      </nav>
        <ul className="navbar-button">
          <li><NavLink to='/contact' className="navbar-button__button">Contact us</NavLink></li>
          <li><NavLink to='/join' className="navbar-button__button">Join Gidra</NavLink></li>
        </ul>
    </header>
  );
};

export default Navbar;
