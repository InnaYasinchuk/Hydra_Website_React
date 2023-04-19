import React, { useState } from "react";
import "./Technologies.scss";

import techImg from "./images/TechPageImg.webp";
import { Dropdown } from "./svg";
import Slider from "../../components/Slider/Slider";
import { sliderPages } from "../../components/Slider/sliderSettings";
import { technologiesCards } from "../../components/TechnologiesCard/TechnologiesCardList";
import TechnologiesCard from "../../components/TechnologiesCard/TechnologiesCard";

const Technologies = () => {
  const [showImage, setShowImage] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const showImages = () => {
    setShowImage((prevShowImage) => !prevShowImage);
  };

  return (
    <section className="tech-page">
      <div className="tech-page__main">
        <img src={techImg} alt="unreal" className="tech-page__main_img"></img>
        <h1 className="tech-page__main_title">TECHNOLOGIES & HARDWARE</h1>
        <h2 className="tech-page__main_subtitle">USED BY HYDRA VR</h2>
      </div>
      <div className="tech-page__dropdown-max" onClick={showImages}>
        <div className="tech-page__dropdown-min">
          <span className={showImage ? "tech-page__dropdown_active" : "tech-page__dropdown"}>
            <Dropdown />
          </span>
        </div>
      </div>

      {showImage ? (
        <div className="tech-page__technologies fade-in">
          {technologiesCards.map((technologiesCard) => (
            <TechnologiesCard
              img={technologiesCard.img}
              alt={technologiesCard.alt}
              key={technologiesCard.id}
            />
          ))}
        </div>
      ) : (
        ""
      )}

      {isMobile ? (
        <Slider
          settings={sliderPages}
          technologiesCards={technologiesCards}
          type="technologies"
        />
      ) : (
        <></>
      )}
    </section>
  );
};

export default Technologies;
