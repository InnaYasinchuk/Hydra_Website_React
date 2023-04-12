
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "./Slider.scss";
import Contact from "../Contact/Contact";

const Slider = ({contacts, settings}) => {
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
        <img src={settings.srcLeft} alt="left" className={settings.classNameButtonLeft}></img>
        
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

        <img src={settings.srcRight} alt="right" className={settings.classNameButtonRight}></img>
        ...
      </Swiper>
  
   );
}
 
export default Slider;