import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "./images/logo.png";
import frame from "./images/frame.png";

const Navbar = () => {
  return (
    <header className="Navbar">
      <NavLink to='/'className="logo"> 
        <img src={logo} alt="logo" width={102}></img>
        <img src={frame} alt="frame" width={76}></img>
      </NavLink>
      <nav className="nav">
        <ul>
          <li><NavLink to='/about'className={({isActive}) => isActive ? "activeLink" : ""} >About</NavLink></li>
          <li><NavLink to='/services' className={({isActive}) => isActive ? "activeLink" : ""} >Services</NavLink></li>
          <li><NavLink to='/technologies' className={({isActive}) => isActive ? "activeLink" : ""} >Technologies</NavLink></li>
          <li><NavLink to='/how_to' className={({isActive}) => isActive ? "activeLink" : ""} >How to</NavLink></li>
        </ul>
      </nav>
      <div className="contact">
        <ul>
          <li><NavLink to='/contact'>Contact us</NavLink></li>
          <li><NavLink to='/join'>Join Gidra</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
