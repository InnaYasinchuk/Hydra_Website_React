import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "./Slider.scss"
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import "../../components/Slider/Slider.scss"

const Slider = ({ type, contacts, settings, services }) => {
  let slides = null;

  switch (type) {
    case "contacts":
      slides = contacts.map((contact) => (
        <SwiperSlide key={contact.id}>
          <Contact
            img={contact.img}
            title={contact.title}
            description={contact.description}
            href={contact.href}
            target={contact.target}
          />
        </SwiperSlide>
      ));
      break;
    case "services":
      slides = services.map((service) => (
        <SwiperSlide key={service.id}>
          <Service
            img={service.img}
            title={service.title}
            description={service.description}
            alt={service.alt}
          />
        </SwiperSlide>
      ));
      break;
    default:
      slides = null;
  }

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={settings.spaceBetween}
      slidesPerView={1}
      navigation={{
        prevEl: settings.prevEl,
        nextEl: settings.nextEl,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={settings.classNameSwiper}
    >
      <div className={settings.classNameCircleMaxLeft}>
        <div className={settings.classNameCircleMiniLeft}>
          <svg className={settings.classNameButtonLeft}>{settings.left}</svg>
        </div>
      </div>

      {slides}

      <div className={settings.classNameCircleMaxRight}>
        <div className={settings.classNameCircleMiniRight}>
          <svg className={settings.classNameButtonRight}>{settings.right}</svg>
        </div>
      </div>
      ...
    </Swiper>
  );
};

export default Slider;
