import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.scss';
import { FooterFacebook, FooterInstagram, FooterLinkedin, FooterLogo, FooterPinterest, FooterTwitter, FooterV17, FooterV18, FooterV19, FooterV20, FooterV21, FooterV22, FooterYoutube } from "./svg";

const Footer = () => {

  const isMobile = window.innerWidth <= 768;

  return ( 
  <footer className="footer">
    <svg className="footer_vector17"><FooterV17 /></svg>
    <svg className="footer_vector18"><FooterV18 /></svg>
    <svg className="footer_vector19"><FooterV19 /></svg>
    <svg className="footer_vector20"><FooterV20 /></svg>
    <svg className="footer_vector21"><FooterV21 /></svg>
    <svg className="footer_vector22"><FooterV22 /></svg>
   
    <section className="footer-section">
      <NavLink to='/' className="footer-section__logo" target='_top'><FooterLogo /></NavLink> 
      <div className="footer-section__services">
        <ul className="footer-menu">
          <li><NavLink to='/about'className={({isActive}) => isActive ? "footer-menu__link_active" : "footer-menu__link"} target='_top' >About</NavLink></li>
          <li><NavLink to='/services' className={({isActive}) => isActive ? "footer-menu__link_active" : "footer-menu__link" } target='_top' >Services</NavLink></li>
          <li><NavLink to='/technologies' className={({isActive}) => isActive ? "footer-menu__link_active" : "footer-menu__link"} target='_top'>Technologies</NavLink></li>
          <li><NavLink to='/how_to' className={({isActive}) => isActive ? "footer-menu__link_active" : "footer-menu__link"} target='_top'>How to</NavLink></li>
          <li><NavLink to='/join' className={({isActive}) => isActive ? "footer-menu__link_active" : "footer-menu__link"} target='_top'>Join Gidra</NavLink></li>
      </ul>
      </div>
      <div className="footer-section__info">
        <ul className="footer-menu">
          <li className= "footer-menu__link" >F.A.Q</li>
          <li className="footer-menu__link">SITEMAP</li>
          <li className="footer-menu__link">CONDITIONS</li>
          <li className="footer-menu__link">LICENSES</li>
        </ul>
      </div>
      <div className="footer-section__social">
        <h3 className="social_title">SOCIALIZE WITH HYDRA</h3>
        <div className="social_items">
          <FooterFacebook />
          <FooterTwitter />
          <FooterLinkedin />
          <FooterYoutube />
          <FooterInstagram />
          <FooterPinterest />
        </div>
        <NavLink to="/services" className="social_button">Build your world</NavLink>
      </div>
    </section>
    {isMobile ?
    <p className="footer__rights"> 2023 © HYDRA LANDING PAGE <br /> BY ZINE. E. FALOUTI <br /> ALL RIGHTS RESERVED</p>
    : 
    <p className="footer__rights">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</p>}
    
  </footer> 
  );
}
 
export default Footer;