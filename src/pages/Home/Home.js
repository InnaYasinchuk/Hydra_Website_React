import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

import { homeContent } from "./homeContent";
import { HomeV1, HomeV2, HomeV3, HomeV4 } from "./svg";
import mainImage from "../../pages/Home/images/home-img.webp";
import arrowRight from "../../pages/Home/images/home-arrow-small-right1.png"
import ContactsHome from "../../components/ContactsHome/ContactsHome";

const Home = () => {
 
  return (
    <div className="home">
      <section className="home-page">
        <div className="home-page__border">
          <img className="home-page__image" src={mainImage} alt="virtual" loading="lazy"></img>
          <svg className="home-page_vector1"><HomeV1 /></svg>
          <svg className="home-page_vector2"><HomeV2 /></svg>
          <svg className="home-page_vector3"><HomeV3 /></svg>
        </div>
        <div className="home-page__description">
          <svg className="home-page_vector4"><HomeV4 /></svg>
          <h1 className="home-page__title"><span className="home-page__title_accent1">{homeContent.title.accent1}</span> {homeContent.title.main1} <br /> {homeContent.title.main2}<span className="home-page__title_accent2"> {homeContent.title.accent2}</span>
          </h1>
          <p className="home-page__text">
              {homeContent.description}
            </p>
          <NavLink to="/services" className="home-page__button">
            {homeContent.button}
          </NavLink>
          <img src={arrowRight} alt="arrow" className="home-page__arrow"></img>
        </div>
      </section>
      <ContactsHome />
    </div>
  );
};

export default Home;
