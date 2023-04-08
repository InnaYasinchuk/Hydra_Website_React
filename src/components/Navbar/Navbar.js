import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../Logo/Logo";


const Navbar = () => {

const[burger, setBurger] = useState(false);
const isMobile = window.innerWidth <= 768;
  
  return (
    <header className="header">
      <Logo />
      <nav className="header-menu">
        <ul className={ burger ? "header-menu-list_active" : "header-menu-list"} >
          {isMobile ? 
          <li><NavLink to='/' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} onClick={() =>{ if(isMobile) {setBurger(!burger)}}}>Home</NavLink></li> : ''}
          <li><NavLink to='/about'className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} onClick={() =>{ if(isMobile) {setBurger(!burger)}}} >About</NavLink></li>
          <li><NavLink to='/services' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link" } onClick={() =>{ if(isMobile) {setBurger(!burger)}}} >Services</NavLink></li>
          <li><NavLink to='/technologies' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} onClick={() =>{ if(isMobile) {setBurger(!burger)}}} >Technologies</NavLink></li>
          <li><NavLink to='/how_to' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} onClick={() =>{ if(isMobile) {setBurger(!burger)}}} >How to</NavLink></li>
        {isMobile ? <li><NavLink to='tel:%2B3811011111010' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} onClick={() =>{ if(isMobile) {setBurger(!burger)}}}>Contact us</NavLink></li> : ''}
        {isMobile ? <li><NavLink to='/join' className={({isActive}) => isActive ? "header-menu__link__active" : "header-menu__link"} onClick={() =>{ if(isMobile) {setBurger(!burger)}}}>Join Gidra</NavLink></li> : ''}
        </ul>
      </nav>
        <ul className="navbar-button">
          <li><NavLink to='tel:%2B3811011111010' className="navbar-button__button">Contact us</NavLink></li>
          <li><NavLink to='/join' className="navbar-button__button">Join Gidra</NavLink></li>
        </ul>
        <button onClick={() => setBurger(!burger)} className={burger ? "burger-menu_open" : "burger-menu" } >
          <span></span></button>
    </header>
  );
};

export default Navbar;
