import React from "react";
import "./ContactsHome.scss";
import { contacts } from "../Contact/contactList";
import { SliderSeparator1, SliderSeparator2 } from "./svg";
import Contact from "../Contact/Contact";
import Slider from "../Slider/Slider";
import { sliderHome } from "../Slider/sliderSettings";

const ContactsHome = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return (
    <Slider settings={sliderHome} contacts={contacts} />
    );
  } else {
    return (
      <div className="slider">
        <svg className="slider__separator1"><SliderSeparator1 /></svg>
        <svg className="slider__separator2"><SliderSeparator2 /></svg>

        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            img={contact.img}
            title={contact.title}
            description={contact.description}
            href={contact.href}
            target={contact.target}
          />
        ))}
      </div>
    );
  }
};

export default ContactsHome;
