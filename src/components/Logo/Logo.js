import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import './Logo.scss';

import { LogoMax, LogoMini, H, Y, D, R, A, HMini, YMini, DMini, RMini, AMini } from "./svg";

const Logo = () => {

  const isMobile = window.innerWidth <= 768;
  const logoRef = useRef(null);
 

  useEffect(() => {
    const logo = logoRef.current.querySelector('.header-logo__item-img svg');
    gsap.to(logo, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });
  }, []);

  return ( 
    <div className="header-logo">
      <NavLink to='/'>       
          <span className="header-logo__item-img" ref={logoRef}>{isMobile ? <LogoMini /> : <LogoMax />}</span>
      </NavLink> 
      <NavLink to='/'>   
          <span className="header-logo__item">{isMobile ? <HMini /> : <H />}</span>
          <span className="header-logo__item">{isMobile ? <YMini /> : <Y />}</span>
          <span className="header-logo__item">{isMobile ? <DMini /> : <D />}</span>
          <span className="header-logo__item">{isMobile ? <RMini /> : <R />}</span>
          <span className="header-logo__item">{isMobile ? <AMini /> : <A />}</span>
      </NavLink>
      </div>
   );
}
 
export default Logo;