import React from "react";
import "./HowTo.scss";
import { HowToArrow, HowToLine, HowToV15 } from "./svg";
import HowCard from "../../components/HowCard/HowCard";
import { howCards } from "../../components/HowCard/howCardList";
import { howToContent } from "./howToContent";

import Slider from "../../components/Slider/Slider";
import { sliderPages } from "../../components/Slider/sliderSettings";

const HowTo = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="howTo-page">
      <svg className="howTo-page_vector"><HowToV15 /></svg>
      <div className="howTo-page__main">
        <div className="howTo-page__main_titles">
          <svg className="howTo-page__string">
            <HowToLine />
          </svg>
          <svg className="howTo-page__arrow">
            <HowToArrow />
          </svg>
          <h1 className="howTo-page__main_title">{howToContent.title}</h1>
          <h2 className="howTo-page__main_subtitle">{howToContent.subtitle}</h2>
        </div>
        <p className="howTo-page__main_description">
          {howToContent.description}
        </p>
      </div>
      {isMobile ? (
        <Slider settings={sliderPages} howCards={howCards} type="howTo" />
      ) : (
        <div className="howTo-page__cards">
          {howCards.map((howCard) => (
            <HowCard
              key={howCard.id}
              number={howCard.number}
              description={howCard.description}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HowTo;
