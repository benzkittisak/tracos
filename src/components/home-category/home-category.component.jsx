import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";

import TitleSection from "../title-section/title-section.componet";

import CATEGORY_DATA from "../../assets/data/category.data";

// import "./home-category.style.scss";

SwiperCore.use([Navigation]);

const HomeCategorySlider = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-category-button-next",
      prevEl: ".swiper-category-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 10,
    // slidesPerGroupSkip:1,
    watchSlidesProgress: true,
  };
  return (
    <div className="category-slider">
      <div className="category-slider-header-area">
        <TitleSection header={"เลือกดูตามประเภทสินค้า"}>
          คุณสามารถเลือกดูสถานที่ต่าง ๆ
          ที่คุณต้องการจากประเภทของสถานที่ที่คุณต้องการ
        </TitleSection>
        
        <div className="swipper-button-container">
          <div className="swiper-category-button-prev">
            <i className="fal fa-arrow-left"></i>
          </div>
          <div className="swiper-category-button-next">
            <i className="fal fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="category-slider-container">
        <Swiper {...params}>
          {CATEGORY_DATA.map(({ id, icon, name, url }) => (
            <SwiperSlide key={id}>
              <Link to={process.env.PUBLIC_URL + url}>
                <div className="category-slider-content">
                  <div className="category-slider-content-icon">
                    <i className={icon}></i>
                  </div>
                  <div className="category-slider-content-title">
                    <h5>{name}</h5>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCategorySlider;
