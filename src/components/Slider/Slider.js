import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "./slider.scss";

import { contacts } from "../Contact/contactList";
import { SliderSeparator1, SliderSeparator2 } from "./svg";
import swiperLeft from "./images/swiper-left.png";
import swiperRight from "./images/swiper-right.png";
import Contact from "../Contact/Contact";

const Slider = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={3}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper"
      >
        <img src={swiperLeft} alt="left" className="swiper-button-prev"></img>
        {contacts.map((contact) => (
          <SwiperSlide key={contact.id}>
            <Contact
              img={contact.img}
              title={contact.title}
              description={contact.description}
              href={contact.href}
              target={contact.target}
            />
          </SwiperSlide>
        ))}
        <img src={swiperRight} alt="right" className="swiper-button-next"></img>
        ...
      </Swiper>
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

export default Slider;
