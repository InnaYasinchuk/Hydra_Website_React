import React from "react";
import { NavLink } from "react-router-dom";
import { aboutContent } from "./aboutContent";
import "./About.scss";

import aboutImg from "./images/about-img.webp";
import { AboutV7, AboutV8, AboutString, AboutArrow } from "./svg";

const About = () => {
  return (
    <section className="about">
      <div className="about-first-blok">
        <h1 className="about-first-blok__title">{aboutContent.title1}</h1>
        <h2 className="about-first-blok__subtitle">{aboutContent.subtitle1}</h2>
        <img src={aboutImg} alt="man" className="about-first-blok__img" loading="lazy"></img>
        <svg className="about-first-blok__vector7"><AboutV7 /></svg>
        <svg className="about-first-blok__vector8"><AboutV8 /></svg>
        <svg className="about-first-blok__vectorString"><AboutString /></svg>
        <svg className="about-first-blok__vectorArrow"><AboutArrow /></svg>
      </div>
      <div className="about-second-blok">
        <p className="about-second-blok__description_top">
          {aboutContent.description1}
        </p>
        <h1 className="about-second-blok__title">{aboutContent.title2}</h1>
        <h2 className="about-second-blok__subtitle">{aboutContent.subtitle2}</h2>
        <p className="about-second-blok__description">
         {aboutContent.description2}
        </p>
        <NavLink to="/join" className="about-second-blok__button">
          {aboutContent.button}
        </NavLink>
      </div>
    </section>
  );
};

export default About;
