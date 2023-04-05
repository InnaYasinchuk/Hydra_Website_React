import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './slider.scss';
import Contact from "../Contact/contact";
import {contacts} from "../Contact/contactList";
import { SliderSeparator1, SliderSeparator2 } from "./svg";

const Slider = () => {

  const isMobile = window.innerWidth <= 768;

    if(isMobile){
      return (
     <Swiper
      modules={[Navigation]}
      spaceBetween={3}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {contacts.map((contact) => (
          <SwiperSlide key={contact.id}>
            <Contact img={contact.img} title={contact.title} description={contact.description} />
          </SwiperSlide>
        ))}
      ...
    </Swiper>
    );
  } else {
    return (
      <div className="slider">
        <svg className="slider__separator1"> <SliderSeparator1 /> </svg>
        <svg className="slider__separator2"> <SliderSeparator2 /> </svg>
       
        {contacts.map((contact) => (
          <Contact key={contact.id} img={contact.img} title={contact.title} description={contact.description} />
        ))}
      </div>
    );
  }
}

 
export default Slider;