import React from "react";
import "./Services.scss";
import Service from "../../components/Service/Service";
import { services } from "../../components/Service/ServiceList";
import { ServicesArrow, ServicesLine } from "./svg";
import Slider from "../../components/Slider/Slider";
import { sliderPages } from "../../components/Slider/sliderSettings";
import { servicesContent } from "./servicesContent";

const Services = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="services-page">
      <svg className="services-page__string">
        <ServicesLine />
      </svg>
      <svg className="services-page__arrow">
        <ServicesArrow />
      </svg>
      <div className="services-page__main">
        <div className="services-page__main_titles">
          <h1 className="services-page__main_title">{servicesContent.title}</h1>
          <h2 className="services-page__main_subtitle">{servicesContent.subtitle}</h2>
        </div>
        <p className="services-page__main_description">
          {servicesContent.description}
        </p>
      </div>
      {isMobile ? (
        <Slider settings={sliderPages} services={services} type="services" />
      ) : (
        <div className="services-page__cards">
          {services.map((service) => (
            <Service
              key={service.id}
              img={service.img}
              title={service.title}
              description={service.description}
              alt={service.alt}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
