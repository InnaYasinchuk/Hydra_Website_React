import React from "react";
import { NavLink } from "react-router-dom";
import "./About.scss";

import aboutImg from "./images/about-img.webp";
import { AboutV7, AboutV8, AboutString, AboutArrow } from "./svg";

const About = () => {
  return (
    <section className="about">
      <div className="about-first-blok">
        <h1 className="about-first-blok__title">INTRODUCTION</h1>
        <h2 className="about-first-blok__subtitle">TO HYDRA VR</h2>
        <img src={aboutImg} alt="man" className="about-first-blok__img"></img>
        <svg className="about-first-blok__vector7"><AboutV7 /></svg>
        <svg className="about-first-blok__vector8"><AboutV8 /></svg>
        <svg className="about-first-blok__vectorString"><AboutString /></svg>
        <svg className="about-first-blok__vectorArrow"><AboutArrow /></svg>
      </div>
      <div className="about-second-blok">
        <p className="about-second-blok__description_top">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
        <h1 className="about-second-blok__title">ABOUT</h1>
        <h2 className="about-second-blok__subtitle">HYDRA VR</h2>
        <p className="about-second-blok__description">
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipiscing at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat semper
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudi n tempor.
        </p>
        <NavLink to="/join" className="about-second-blok__button">
          Let's get in touch
        </NavLink>
      </div>
    </section>
  );
};

export default About;
