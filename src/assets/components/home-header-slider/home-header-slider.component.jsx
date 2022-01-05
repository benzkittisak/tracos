import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import SLIDE_DATA from "../../data/slider.data";

import "./home-header-slider.style.scss";

SwiperCore.use([Navigation]);

const HomeHeaderSlider = () => {
  const params = {
    slidesPerView: 1,
    navigation: true,
  };

  return (
    <Swiper {...params}>
      {SLIDE_DATA.map(({ id, title, location, image }) => (
        <SwiperSlide key={id}>
          <div className="slider-black-overlay"></div>
          <div className="slider-container">
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="slider-content"
            >
              <div className="slider-location">
                <h4>{location}</h4>
              </div>
              <div className="slider-title">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeHeaderSlider;
