import React from "react";

import { SwiperLeft, SwiperLeftHome, SwiperRight, SwiperRightHome } from "./svg";


const sliderHome = {
  spaceBetween: 3,
  classNameSwiper: "swiper-home",
  prevEl: ".swiper-button-prev-home",
  nextEl: ".swiper-button-next-home",
  left: <SwiperLeftHome />,
  right: <SwiperRightHome />,
  classNameButtonLeft: "swiper-button-prev-home",
  classNameButtonRight: "swiper-button-next-home",
}

export {sliderHome}

const sliderPages = {
  spaceBetween: 4,
  classNameSwiper: "swiper-pages",
  prevEl: ".swiper-button-prev",
  nextEl: ".swiper-button-next",
  left: <SwiperLeft />,
  right: <SwiperRight/>,
  classNameCircleMaxLeft:"swiper-circle-max-left",
  classNameCircleMiniLeft: "swiper-circle-mini-left",
  classNameCircleMaxRight:"swiper-circle-max-right",
  classNameCircleMiniRight: "swiper-circle-mini-right",
  classNameButtonLeft: "swiper-button-prev",
  classNameButtonRight: "swiper-button-next",

} 

export {sliderPages}