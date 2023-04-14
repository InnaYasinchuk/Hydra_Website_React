import React from "react";
import "./Services.scss";
import Service from "../../components/Service/Service";
import { services } from "../../components/Service/ServiceList";
import { ServicesArrow, ServicesLine } from "./svg";
import Slider from "../../components/Slider/Slider";
import { sliderPages } from "../../components/Slider/sliderSettings";

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
          <h1 className="services-page__main_title">WHY BUILD</h1>
          <h2 className="services-page__main_subtitle">WITH HYDRA?</h2>
        </div>
        <p className="services-page__main_description">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae
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
