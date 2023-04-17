import React from "react";
import "./HowCard.scss";
import { HowCardArrow } from "./svg";

const HowCard = ({ number, description }) => {
  return (
    <div className="howto-card">
      <div className="border-max">
        <div className="border-min">
          <p className="number-card">{number}</p>
        </div>
      </div>
      <div className="howto-card__description">
        <span className="arrow"><HowCardArrow /></span>
        <h3 className="howto-card__description_title">{description}</h3>
      </div>
    </div>
  );
};

export default HowCard;
